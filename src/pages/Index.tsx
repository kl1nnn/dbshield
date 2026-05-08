import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Database, Lock, ChevronRight, Menu, X, ChevronDown, Star, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [["features","Recursos"],["testimonials","Depoimentos"],["pricing","Planos"],["faq","FAQ"],["contact","Contato"]];
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-7 w-7 text-primary" />
          <span className="text-xl font-display font-bold text-foreground">DBShield</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className="hover:text-foreground transition-colors">{label}</button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Entrar</Button>
          <Button size="sm" onClick={() => scrollTo("contact")}>Agendar Demo</Button>
        </div>
        <button className="md:hidden text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
            className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden">
            <div className="container py-4 flex flex-col gap-1">
              {links.map(([id, label]) => (
                <button key={id} onClick={() => { scrollTo(id); setMobileOpen(false); }}
                  className="py-3 px-2 text-left text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 last:border-0">
                  {label}
                </button>
              ))}
              <div className="flex gap-3 pt-3">
                <Button variant="ghost" size="sm" className="flex-1">Entrar</Button>
                <Button size="sm" className="flex-1" onClick={() => { scrollTo("contact"); setMobileOpen(false); }}>Agendar Demo</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Proteção de banco de dados" className="w-full h-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-background/50" />
    </div>
    <div className="container relative z-10 py-20">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
          <Lock className="h-3.5 w-3.5" />
          Observabilidade e defesa para bancos de dados
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
          Um painel claro para acompanhar riscos em{" "}<span className="text-gradient-primary">bancos de dados</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          O DBShield centraliza sinais de acesso, tentativas suspeitas e pontos de configuração para equipes que precisam enxergar o que acontece no banco antes que vire incidente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="hero" onClick={() => scrollTo("contact")}>Começar agora <ChevronRight className="ml-1 h-5 w-5" /></Button>
          <Button variant="hero-outline" onClick={() => scrollTo("contact")}>Agendar demonstração</Button>
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8 mt-12 text-muted-foreground text-sm">
          {["Logs organizados por risco","Alertas para eventos críticos","Relatórios para auditoria"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />{t}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

const features = [
  { icon: Shield, title: "Eventos priorizados", description: "Tentativas de acesso, consultas suspeitas e falhas de autenticação aparecem com nível de risco e contexto do alvo." },
  { icon: Database, title: "Ambientes diferentes", description: "A interface foi pensada para acompanhar bancos relacionais e NoSQL sem espalhar a análise em várias telas." },
  { icon: Lock, title: "Apoio à conformidade", description: "Indicadores de criptografia, backup, autenticação e auditoria ajudam a encontrar lacunas antes da revisão formal." },
];

const Features = () => (
  <section id="features" className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Segurança tratada como <span className="text-gradient-primary">rotina</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">A proposta é tirar sinais importantes dos logs e transformar isso em uma leitura simples para times de TI, desenvolvimento e gestão.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-gradient-card border border-border rounded-2xl p-8 transition-all duration-500 border-glow-hover hover:-translate-y-1">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:glow-primary transition-all duration-500">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const testimonials = [
  { name: "Marina Costa", role: "Coordenadora de TI", avatar: "MC", stars: 5, text: "O painel ajudou nossa equipe a enxergar rapidamente quais acessos mereciam atenção. Antes disso, tudo ficava perdido nos logs." },
  { name: "João Pereira", role: "Analista de infraestrutura", avatar: "JP", stars: 5, text: "A parte mais útil foi separar tentativa bloqueada, evento em observação e risco real. Fica bem mais fácil explicar a situação para quem não é técnico." },
  { name: "Renata Lima", role: "Desenvolvedora backend", avatar: "RL", stars: 5, text: "Usei o dashboard como base para discutir autenticação, backups e permissões com o time. Ele deixa os problemas visíveis sem exagerar no jargão." },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 bg-gradient-card border-y border-border">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Feedbacks usados no <span className="text-gradient-primary">protótipo</span></h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Depoimentos fictícios para representar perfis que usariam a ferramenta em uma empresa.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
            className="bg-gradient-card border border-border rounded-2xl p-8 flex flex-col gap-4 border-glow-hover transition-all duration-500">
            <div className="flex gap-1">
              {Array.from({ length: t.stars }).map((_, s) => <Star key={s} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
            <div className="flex items-center gap-3 pt-2 border-t border-border">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">{t.avatar}</div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const plans = [
  { name: "Essencial", price: "R$89", period: "/mês", features: ["1 banco monitorado","Alertas por e-mail","Histórico de 7 dias","Checklist de segurança"], popular: false },
  { name: "Equipe", price: "R$249", period: "/mês", features: ["Até 5 bancos","Alertas por severidade","Relatórios mensais","Perfis de acesso","Suporte por chat"], popular: true },
  { name: "Operação", price: "Sob consulta", period: "", features: ["Ambientes ilimitados","Integração via API","Retenção estendida","SLA contratado","Acompanhamento técnico"], popular: false },
];

const Pricing = () => (
  <section id="pricing" className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Planos para diferentes <span className="text-gradient-primary">operações</span></h2>
        <p className="text-muted-foreground text-lg">Valores fictícios usados para demonstrar a tela comercial do projeto.</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative bg-gradient-card border rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${plan.popular ? "border-primary/50 glow-primary scale-105" : "border-border border-glow-hover"}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">MAIS POPULAR</div>
            )}
            <h3 className="text-xl font-display font-semibold mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />{f}
                </li>
              ))}
            </ul>
            <Button variant={plan.popular ? "default" : "outline"} className="w-full" size="lg" onClick={() => scrollTo("contact")}>Começar agora</Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const faqs = [
  { question: "Este projeto bloqueia ataques de verdade?", answer: "Não. Esta versão é um protótipo de interface. Os bloqueios, gráficos e registros são simulados para demonstrar como a experiência funcionaria." },
  { question: "Quais bancos a ideia poderia atender?", answer: "A proposta foi desenhada pensando em MySQL, PostgreSQL, SQL Server e MongoDB, mas a tela não depende de uma integração real nesta versão." },
  { question: "O conteúdo dos dados seria analisado?", answer: "A ideia é trabalhar com metadados, logs de acesso e padrões de consulta. O dashboard não precisa expor registros sensíveis para indicar comportamento suspeito." },
  { question: "Como a LGPD entra no projeto?", answer: "O painel ajuda a visualizar acessos, autenticação, criptografia e trilhas de auditoria, pontos que podem apoiar uma rotina de conformidade." },
  { question: "O formulário envia mensagens reais?", answer: "Não. O envio é simulado no navegador para mostrar o estado de carregamento e confirmação da interface." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24 bg-gradient-card border-y border-border">
      <div className="container max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Perguntas <span className="text-gradient-primary">frequentes</span></h2>
          <p className="text-muted-foreground text-lg">Alguns limites e decisões do protótipo.</p>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-border rounded-2xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left bg-gradient-card hover:bg-secondary/30 transition-colors">
                <span className="font-semibold text-foreground">{faq.question}</span>
                <ChevronDown className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type FormState = "idle" | "sending" | "sent";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };
  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Quer testar o <span className="text-gradient-primary">fluxo</span>?</h2>
          <p className="text-muted-foreground text-lg">O formulário simula o contato para fechar a navegação da landing page.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gradient-card border border-border rounded-3xl p-8 md:p-10">
          {status === "sent" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <CheckCircle className="h-16 w-16 text-primary" />
              <h3 className="text-2xl font-display font-bold">Mensagem enviada!</h3>
              <p className="text-muted-foreground">O estado de confirmação foi registrado na interface.</p>
              <Button variant="outline" onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", message: "" }); }}>Enviar outra mensagem</Button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {[["name","Nome *","Seu nome","text"],["email","E-mail *","seu@email.com","email"]].map(([name, label, ph, type]) => (
                  <div key={name} className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground">{label}</label>
                    <input name={name} type={type} value={form[name as keyof typeof form]} onChange={handleChange} placeholder={ph}
                      className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Empresa</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Nome da empresa (opcional)"
                  className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-foreground">Mensagem *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Conte como podemos ajudar..." rows={5}
                  className="bg-secondary border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none" />
              </div>
              <Button onClick={handleSubmit} disabled={status === "sending" || !form.name || !form.email || !form.message} className="w-full" size="lg">
                {status === "sending" ? (
                  <span className="flex items-center gap-2"><span className="h-4 w-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />Enviando...</span>
                ) : (
                  <span className="flex items-center gap-2"><Send className="h-4 w-4" />Enviar mensagem</span>
                )}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <span className="font-display font-bold">DBShield</span>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <button onClick={() => scrollTo("features")} className="hover:text-foreground transition-colors">Privacidade</button>
          <button onClick={() => scrollTo("features")} className="hover:text-foreground transition-colors">Termos</button>
          <button onClick={() => scrollTo("contact")} className="hover:text-foreground transition-colors">Contato</button>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 DBShield. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Features />
    <Testimonials />
    <Pricing />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Index;
