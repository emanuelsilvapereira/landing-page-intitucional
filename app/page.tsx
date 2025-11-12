// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Leaf, TrendingUp, DollarSign, Award, Menu, X, ArrowRight, Mail, Phone, MapPin, Zap, Users, Target } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Sustentabilidade",
      description: "Compromisso com o planeta e as futuras gerações",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Inovação",
      description: "Tecnologia de ponta para soluções eficientes",
      color: "from-blue-400 to-emerald-600"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Transparência",
      description: "Clareza em cada etapa do processo",
      color: "from-yellow-400 to-emerald-600"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Custo-benefício",
      description: "Energia limpa acessível para todos",
      color: "from-purple-400 to-emerald-600"
    }
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "Engenheira com 15 anos em energia renovável",
      linkedin: "#"
    },
    {
      name: "Carlos Mendes",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Especialista em sistemas fotovoltaicos",
      linkedin: "#"
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Operações",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Expert em gestão de projetos sustentáveis",
      linkedin: "#"
    }
  ];

  const timeline = [
    { year: "2021", event: "Fundação da EcoInova com foco em democratizar energia solar", icon: <Target /> },
    { year: "2022", event: "Primeiros 500 sistemas instalados em residências brasileiras", icon: <Zap /> },
    { year: "2023", event: "Expansão para pequenos comércios e comunidades", icon: <TrendingUp /> },
    { year: "2024", event: "Reconhecimento como startup sustentável do ano", icon: <Award /> }
  ];

  const stats = [
    { number: "1000+", label: "Sistemas Instalados" },
    { number: "50%", label: "Economia Média" },
    { number: "15MW", label: "Energia Gerada" },
    { number: "98%", label: "Satisfação" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header/Navigation */}
        <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
                  EcoInova
                </span>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                {['Manifesto', 'História', 'Valores', 'Equipe'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    className="relative text-gray-700 hover:text-emerald-600 transition-colors font-medium group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden pb-6 space-y-3 animate-fade-in">
                {['Manifesto', 'História', 'Valores', 'Equipe'].map((item, index) => (
                  <a 
                    key={index}
                    href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-700 hover:text-emerald-600 hover:pl-4 transition-all py-2 font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero/Manifesto Section */}
        <section id="manifesto" className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-full shadow-md hover:shadow-lg transition-shadow">
                <span className="text-emerald-700 font-bold text-sm tracking-wide">QUEM SOMOS</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                Iluminando o Futuro com<br />
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-green-600 bg-clip-text text-transparent animate-gradient">
                  Energia Limpa e Acessível
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Transformando a luz do sol em economia e sustentabilidade para o seu lar
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              <div className="group relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-transparent hover:border-emerald-200 animate-fade-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-4 rounded-2xl shadow-lg transform group-hover:rotate-6 transition-transform">
                      <Sun className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">Nossa Missão</h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Democratizar o acesso à energia limpa no Brasil, tornando a energia solar uma realidade acessível para cada lar e negócio brasileiro.
                  </p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-emerald-600 to-emerald-700 p-10 rounded-3xl shadow-xl hover:shadow-2xl text-white transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-800 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg transform group-hover:rotate-6 transition-transform">
                      <TrendingUp className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold ml-4">Nossa Visão</h2>
                  </div>
                  <p className="text-lg leading-relaxed text-emerald-50">
                    Ser líder em soluções de energia solar residencial até 2030, transformando o Brasil em referência em sustentabilidade energética.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section id="historia" className="py-24 bg-white/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A EcoInova nasceu da visão de tornar a energia solar uma realidade acessível para todos os brasileiros. Desde 2021, trabalhamos incansavelmente para levar sustentabilidade e economia para residências e pequenos negócios.
              </p>
            </div>

            {/* Timeline Desktop */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200"></div>
              
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in-up`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-1 px-8">
                      {index % 2 === 0 && (
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 text-right group border-2 border-transparent hover:border-emerald-200">
                          <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full mb-4 text-4xl font-bold shadow-lg">
                            {item.year}
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">{item.event}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="relative flex w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full items-center justify-center z-10 shadow-2xl transform hover:scale-125 transition-transform">
                      <div className="text-white">{item.icon}</div>
                      <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
                    </div>
                    
                    <div className="flex-1 px-8">
                      {index % 2 !== 0 && (
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border-2 border-transparent hover:border-emerald-200">
                          <div className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-full mb-4 text-4xl font-bold shadow-lg">
                            {item.year}
                          </div>
                          <p className="text-gray-700 text-lg leading-relaxed">{item.event}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Mobile */}
            <div className="md:hidden space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-full text-white mr-4">
                      {item.icon}
                    </div>
                    <span className="text-3xl font-bold text-emerald-600">{item.year}</span>
                  </div>
                  <p className="text-gray-700">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <section id="valores" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Nossos Valores</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Princípios que guiam cada decisão e projeto da EcoInova
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 text-center overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative">
                    <div className={`inline-block bg-gradient-to-br ${value.color} text-white p-5 rounded-2xl mb-6 shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipe */}
        <section id="equipe" className="py-24 bg-white/50 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Nossa Equipe</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conheça os especialistas que lideram a revolução da energia solar no Brasil
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-emerald-600 font-bold mb-4 text-lg">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-700 to-green-600"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          <div className="relative max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Pronto para Economizar com<br />Energia Solar?
              </h2>
              <p className="text-2xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Faça parte da revolução energética. Solicite um orçamento personalizado e descubra quanto você pode economizar.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group bg-white text-emerald-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center shadow-2xl transform hover:scale-105">
                  Faça um Orçamento
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="group bg-transparent border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 shadow-2xl transform hover:scale-105">
                  Conheça Nossas Soluções
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-3xl font-bold">EcoInova</span>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Democratizando o acesso à energia limpa no Brasil e transformando o futuro sustentável.
                </p>
                <div className="flex space-x-4">
                  {['facebook', 'instagram', 'linkedin', 'twitter'].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="bg-gray-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                    >
                      <div className="w-5 h-5 bg-white rounded-full"></div>
                    </a>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-6">Contato</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex items-center hover:text-emerald-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>contato@ecoinova.com.br</span>
                  </div>
                  <div className="flex items-center hover:text-emerald-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>(11) 3000-0000</span>
                  </div>
                  <div className="flex items-center hover:text-emerald-400 transition-colors">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-xl mb-6">Links Rápidos</h3>
                <div className="space-y-3">
                  {['Quem Somos', 'Nossos Valores', 'Equipe', 'Soluções', 'Blog'].map((link, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="block text-gray-400 hover:text-emerald-400 hover:pl-2 transition-all"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
              <p>&copy; 2024 EcoInova Ltda. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}