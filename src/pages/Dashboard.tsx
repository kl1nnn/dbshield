import { useState } from "react";
import { Shield, Users, Eye, TrendingUp, Globe, Clock, Activity, ArrowUp, ArrowDown, Database, Lock } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const visitData = [
  { dia: "01/03", visitas: 120, unicos: 89 },
  { dia: "05/03", visitas: 185, unicos: 134 },
  { dia: "10/03", visitas: 143, unicos: 110 },
  { dia: "15/03", visitas: 267, unicos: 198 },
  { dia: "20/03", visitas: 312, unicos: 241 },
  { dia: "25/03", visitas: 289, unicos: 215 },
  { dia: "27/03", visitas: 401, unicos: 310 },
];

const pageData = [
  { pagina: "Home", visitas: 1240 },
  { pagina: "Recursos", visitas: 876 },
  { pagina: "Planos", visitas: 743 },
  { pagina: "Contato", visitas: 512 },
  { pagina: "FAQ", visitas: 389 },
];

const deviceData = [
  { name: "Desktop", value: 54 },
  { name: "Mobile", value: 38 },
  { name: "Tablet", value: 8 },
];

const COLORS = ["#00c8ff", "#00e5b0", "#7c6af7"];

const countryData = [
  { pais: "🇧🇷 Brasil", visitas: 2841, percent: 71 },
  { pais: "🇵🇹 Portugal", visitas: 423, percent: 11 },
  { pais: "🇺🇸 EUA", visitas: 312, percent: 8 },
  { pais: "🇦🇷 Argentina", visitas: 198, percent: 5 },
  { pais: "🌍 Outros", visitas: 213, percent: 5 },
];

const alertas = [
  { hora: "14:32", msg: "Novo visitante de São Paulo, BR", tipo: "info" },
  { hora: "13:58", msg: "Pico de acessos detectado (+40%)", tipo: "warn" },
  { hora: "12:14", msg: "Formulário de contato preenchido", tipo: "success" },
  { hora: "11:47", msg: "Novo visitante de Lisboa, PT", tipo: "info" },
  { hora: "10:23", msg: "Página de Planos — 23 acessos", tipo: "info" },
];

const StatCard = ({ icon: Icon, label, value, delta, positive }: any) => (
  <div className="bg-gradient-card border border-border rounded-2xl p-6 flex flex-col gap-3">
    <div className="flex items-center justify-between">
      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className={`flex items-center gap-1 text-xs font-semibold ${positive ? "text-accent" : "text-destructive"}`}>
        {positive ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
        {delta}
      </span>
    </div>
    <div>
      <p className="text-2xl font-display font-bold text-foreground">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  </div>
);

export default function Dashboard() {
  const [periodo, setPeriodo] = useState("7d");

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Shield className="h-7 w-7 text-primary" />
            <span className="text-xl font-display font-bold text-foreground">DBShield</span>
          </a>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Ao vivo
            </span>
            <span className="text-foreground font-medium">Dashboard</span>
          </div>
        </div>
      </nav>

      <div className="container pt-24 pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">Relatório de Acessos</h1>
            <p className="text-muted-foreground">Última atualização: 27/03/2026 às 14:35</p>
          </div>
          <div className="flex gap-2">
            {["7d","30d","90d"].map((p) => (
              <button key={p} onClick={() => setPeriodo(p)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${periodo === p ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"}`}>
                {p === "7d" ? "7 dias" : p === "30d" ? "30 dias" : "90 dias"}
              </button>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={Eye} label="Visualizações" value="3.987" delta="18%" positive />
          <StatCard icon={Users} label="Visitantes únicos" value="2.341" delta="12%" positive />
          <StatCard icon={Clock} label="Tempo médio" value="3m 24s" delta="5%" positive />
          <StatCard icon={TrendingUp} label="Taxa de conversão" value="4,2%" delta="0,3%" positive />
        </div>

        {/* Gráfico de visitas */}
        <div className="bg-gradient-card border border-border rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-display font-semibold mb-6">Visitas ao longo do tempo</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={visitData}>
              <defs>
                <linearGradient id="gVisitas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00c8ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00c8ff" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gUnicos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00e5b0" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00e5b0" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="dia" tick={{ fontSize: 12, fill: "#888" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: "#888" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: 12, fontSize: 13 }} />
              <Area type="monotone" dataKey="visitas" stroke="#00c8ff" strokeWidth={2} fill="url(#gVisitas)" name="Visitas" />
              <Area type="monotone" dataKey="unicos" stroke="#00e5b0" strokeWidth={2} fill="url(#gUnicos)" name="Únicos" />
            </AreaChart>
          </ResponsiveContainer>
          <div className="flex gap-6 mt-2">
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2 w-8 rounded bg-primary inline-block" />Visitas totais</span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="h-2 w-8 rounded bg-accent inline-block" />Visitantes únicos</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Páginas mais acessadas */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-display font-semibold mb-6">Páginas mais acessadas</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={pageData} layout="vertical">
                <XAxis type="number" tick={{ fontSize: 12, fill: "#888" }} axisLine={false} tickLine={false} />
                <YAxis type="category" dataKey="pagina" tick={{ fontSize: 12, fill: "#888" }} axisLine={false} tickLine={false} width={60} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: 12, fontSize: 13 }} />
                <Bar dataKey="visitas" fill="#00c8ff" radius={[0, 6, 6, 0]} name="Visitas" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Dispositivos */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-display font-semibold mb-6">Dispositivos</h2>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie data={deviceData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" strokeWidth={0}>
                    {deviceData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-3 flex-1">
                {deviceData.map((d, i) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                      {d.name}
                    </span>
                    <span className="text-sm font-semibold text-foreground">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Países */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-display font-semibold mb-1 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" /> Países
            </h2>
            <p className="text-sm text-muted-foreground mb-5">Top origens de acesso</p>
            <div className="flex flex-col gap-4">
              {countryData.map((c) => (
                <div key={c.pais}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{c.pais}</span>
                    <span className="text-muted-foreground">{c.visitas.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${c.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alertas em tempo real */}
          <div className="bg-gradient-card border border-border rounded-2xl p-6">
            <h2 className="text-lg font-display font-semibold mb-1 flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" /> Atividade recente
            </h2>
            <p className="text-sm text-muted-foreground mb-5">Eventos em tempo real</p>
            <div className="flex flex-col gap-3">
              {alertas.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                  <span className={`h-2 w-2 rounded-full mt-1.5 flex-shrink-0 ${a.tipo === "success" ? "bg-accent" : a.tipo === "warn" ? "bg-yellow-400" : "bg-primary"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{a.msg}</p>
                    <p className="text-xs text-muted-foreground">{a.hora}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
