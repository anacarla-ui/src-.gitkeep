import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, AlertCircle, CheckCircle, TrendingUp, Info, Brain, FileText, Shield, BookOpen, User, Globe, Monitor, Users } from 'lucide-react';

const IMVVADForm = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [showResults, setShowResults] = useState(false);

  const sections = [
    {
      name: "Fatores Individuais",
      code: "FI",
      icon: User,
      questions: [
        {
          id: "fi1",
          text: "IDADE",
          options: [
            { text: "16-18", value: 0 },
            { text: "13-15", value: 1 },
            { text: "7-12", value: 2 }
          ]
        },
        {
          id: "fi2",
          text: "GÊNERO",
          options: [
            { text: "Masculino", value: 0 },
            { text: "Feminino", value: 1 },
            { text: "Outro", value: 2 }
          ]
        },
        {
          id: "fi3",
          text: "ESCOLARIDADE",
          options: [
            { text: "Situação Regular", value: 0 },
            { text: "Dificuldade/Irregularidade", value: 1 },
            { text: "Abandono Escolar", value: 2 }
          ]
        },
        {
          id: "fi4",
          text: "DIAGNÓSTICO NEUROPSICOLÓGICO",
          options: [
            { text: "Nenhum Diagnóstico", value: 0 },
            { text: "Transtornos Leves/Moderados", value: 1 },
            { text: "Transtornos Graves/Comorbidades", value: 2 }
          ]
        },
        {
          id: "fi5",
          text: "HISTÓRICO DE TRANSTORNOS PSICOLÓGICOS",
          options: [
            { text: "Nenhum Histórico", value: 0 },
            { text: "Sintomas Moderados/Comportamentos de Risco", value: 1 },
            { text: "Sintomas Graves/Risco de Vida", value: 2 }
          ]
        },
        {
          id: "fi6",
          text: "TEMPO DE USO DE TELA DIÁRIO",
          options: [
            { text: "< 2h/dia", value: 0 },
            { text: "2-5h/dia", value: 1 },
            { text: "> 5h/dia", value: 2 }
          ]
        },
        {
          id: "fi7",
          text: "USO NOTURNO DE TELAS (23h-6h)",
          options: [
            { text: "Ausência de Uso Noturno", value: 0 },
            { text: "Uso Noturno Ocasional", value: 1 },
            { text: "Uso Noturno Consistente", value: 2 }
          ]
        },
        {
          id: "fi8",
          text: "CONTEÚDO DIGITAL CONSUMIDO",
          options: [
            { text: "Predominantemente Educativo", value: 0 },
            { text: "Educativo/Recreativo", value: 1 },
            { text: "Outro (Redes Sociais, Influencers, Jogos Excessivos, Pornografia)", value: 2 }
          ]
        },
        {
          id: "fi9",
          text: "USO DE ALGORITMOS PARA INTERAÇÃO SOCIAL",
          options: [
            { text: "Interação Direta/Não Algorítmica", value: 0 },
            { text: "Manutenção em Redes Sociais Genéricas", value: 1 },
            { text: "Criação de Laços e Expressão Profunda", value: 2 }
          ]
        },
        {
          id: "fi10",
          text: "PRÁTICA DE ESPORTES/ATIVIDADE FÍSICA",
          options: [
            { text: "Prática Regular e Estruturada", value: 0 },
            { text: "Prática Esporádica/Recreativa", value: 1 },
            { text: "Inatividade Física Total", value: 2 }
          ]
        }
      ]
    },
    {
      name: "Fatores Sociais e Estruturais",
      code: "FSE",
      icon: Globe,
      questions: [
        {
          id: "fse1",
          text: "CLASSE SOCIAL (RENDA FAMILIAR)",
          options: [
            { text: "> 5 Salários Mínimos", value: 0 },
            { text: "2 a 5 Salários Mínimos", value: 1 },
            { text: "< 2 Salários Mínimos", value: 2 }
          ]
        },
        {
          id: "fse2",
          text: "RAÇA/COR (AUTODECLARAÇÃO)",
          options: [
            { text: "Branca", value: 0 },
            { text: "Parda", value: 1 },
            { text: "Negra/Outros", value: 2 }
          ]
        },
        {
          id: "fse3",
          text: "PESSOA COM DEFICIÊNCIA (PCD)",
          options: [
            { text: "Nenhuma Deficiência", value: 0 },
            { text: "Deficiência Sensorial/Motora", value: 1 },
            { text: "Deficiência Complexa/Intelectual", value: 2 }
          ]
        },
        {
          id: "fse4",
          text: "HISTÓRICO DE VIOLÊNCIA",
          options: [
            { text: "Nenhum Histórico", value: 0 },
            { text: "Episódios Isolados/Pontuais", value: 1 },
            { text: "Exposição Recorrente/Crônica", value: 2 }
          ]
        },
        {
          id: "fse5",
          text: "ATO INFRACIONAL",
          options: [
            { text: "Nenhum Histórico", value: 0 },
            { text: "Episódios Isolados/Pontuais", value: 1 },
            { text: "Reincidência/Cumprimento de Medida", value: 2 }
          ]
        },
        {
          id: "fse6",
          text: "SITUAÇÃO DE MORADIA",
          options: [
            { text: "Própria/Financiada", value: 0 },
            { text: "Alugada/Cedida", value: 1 },
            { text: "Ocupação/Situação de Rua/Institucional", value: 2 }
          ]
        },
        {
          id: "fse7",
          text: "SITUAÇÃO DE MIGRAÇÃO",
          options: [
            { text: "Não Migrante", value: 0 },
            { text: "Deslocado Interno/Migrante Local", value: 1 },
            { text: "Refugiado/Imigrante Internacional", value: 2 }
          ]
        },
        {
          id: "fse8",
          text: "ACESSO A CULTURA E LAZER",
          options: [
            { text: "Acesso e Engajamento Regular", value: 0 },
            { text: "Acesso Limitado/Ocasional", value: 1 },
            { text: "Sem Acesso ou Desinteresse Total", value: 2 }
          ]
        },
        {
          id: "fse9",
          text: "TEMPO LIVRE E FORMAS DE ENTRETENIMENTO",
          options: [
            { text: "Diversificação", value: 0 },
            { text: "Preponderância Online", value: 1 },
            { text: "Dominância Digital e Isolamento", value: 2 }
          ]
        },
        {
          id: "fse10",
          text: "PROFISSIONALIZAÇÃO",
          options: [
            { text: "Não realiza atividade laboral", value: 0 },
            { text: "Vínculo Formal/Aprendizagem", value: 1 },
            { text: "Trabalho Informal/Infantil", value: 2 }
          ]
        }
      ]
    },
    {
      name: "Educação Digital",
      code: "ED",
      icon: Monitor,
      questions: [
        {
          id: "ed1",
          text: "ACESSO À EDUCAÇÃO DIGITAL",
          options: [
            { text: "Instrução Formal e Abrangente", value: 0 },
            { text: "Aprendizagem Informal ou Parcial", value: 1 },
            { text: "Ausência de Conhecimento Base", value: 2 }
          ]
        },
        {
          id: "ed2",
          text: "CONSCIÊNCIA SOBRE ALGORITMOS E MANIPULAÇÃO DIGITAL",
          options: [
            { text: "Consciência Crítica e Aprofundada", value: 0 },
            { text: "Noção Básica de Personalização", value: 1 },
            { text: "Inconsciência Algorítmica", value: 2 }
          ]
        },
        {
          id: "ed3",
          text: "CAPACIDADE DE IDENTIFICAR DESINFORMAÇÃO E RISCOS ONLINE",
          options: [
            { text: "Alta Capacidade de Verificação e Defesa", value: 0 },
            { text: "Reconhecimento Parcial de Riscos", value: 1 },
            { text: "Vulnerabilidade a Riscos e Enganos", value: 2 }
          ]
        }
      ]
    },
    {
      name: "Supervisão Parental",
      code: "SP",
      icon: Users,
      questions: [
        {
          id: "sp1",
          text: "MEDIAÇÃO PARENTAL (Regras e Limites de Uso)",
          options: [
            { text: "Restrição Consistente", value: 0 },
            { text: "Restrição Parcial/Inconsistente", value: 1 },
            { text: "Uso Irrestrito ou Proibição Total", value: 2 }
          ]
        },
        {
          id: "sp2",
          text: "MEDIAÇÃO ATIVA (Diálogo Crítico e Contextualização)",
          options: [
            { text: "Diálogo Frequente e Crítico", value: 0 },
            { text: "Diálogo Ocasional ou Reativo", value: 1 },
            { text: "Ausência de Diálogo", value: 2 }
          ]
        },
        {
          id: "sp3",
          text: "MONITORAMENTO E CONTROLE DE PRIVACIDADE",
          options: [
            { text: "Monitoramento e Proteção Ativa", value: 0 },
            { text: "Monitoramento Inconsistente", value: 1 },
            { text: "Ausência de Controle de Segurança", value: 2 }
          ]
        },
        {
          id: "sp4",
          text: "CO-USO E PARTICIPAÇÃO PARENTAL",
          options: [
            { text: "Co-uso e Participação Regular", value: 0 },
            { text: "Participação Passiva", value: 1 },
            { text: "Isolamento de Uso", value: 2 }
          ]
        }
      ]
    }
  ];

  const handleResponse = (questionId, value) => {
    setResponses({ ...responses, [questionId]: value });
  };

  const calculateResults = () => {
    const sectionScores = {};
    let totalScore = 0;

    sections.forEach(section => {
      const sectionSum = section.questions.reduce((sum, q) => {
        return sum + (responses[q.id] || 0);
      }, 0);
      sectionScores[section.code] = sectionSum;
      totalScore += sectionSum;
    });

    const totalQuestions = 27;
    const imvvadPercentage = (totalScore / (totalQuestions * 2)) * 100;

    return { sectionScores, totalScore, imvvadPercentage };
  };

  const getVulnerabilityLevel = (percentage) => {
    if (percentage <= 20) return {
      level: "Baixa Vulnerabilidade",
      color: "text-emerald-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-green-50",
      borderColor: "border-emerald-300",
      accentColor: "bg-emerald-500"
    };
    if (percentage <= 50) return {
      level: "Moderada Vulnerabilidade",
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-300",
      accentColor: "bg-amber-500"
    };
    if (percentage <= 75) return {
      level: "Alta Vulnerabilidade",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-300",
      accentColor: "bg-orange-500"
    };
    return {
      level: "Muito Alta Vulnerabilidade",
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
      borderColor: "border-red-300",
      accentColor: "bg-red-500"
    };
  };

  const getRecommendations = (percentage) => {
    if (percentage <= 20) {
      return {
        crianca: [
          "Manutenção de práticas digitais saudáveis já estabelecidas",
          "Reforço de competências críticas existentes",
          "Estímulo ao protagonismo digital positivo"
        ],
        familia: [
          "Continuidade das práticas de mediação efetivas",
          "Atualização sobre tendências digitais emergentes",
          "Diálogo contínuo sobre experiências digitais"
        ],
        rede: [
          "Participação em atividades preventivas",
          "Engajamento em programas de cidadania digital"
        ]
      };
    }
    if (percentage <= 50) {
      return {
        crianca: [
          "Participação em programas estruturados de alfabetização digital crítica",
          "Desenvolvimento de competências específicas de autorregulação digital",
          "Diversificação de atividades e interesses não-digitais"
        ],
        familia: [
          "Implementação de práticas de mediação ativa e co-uso",
          "Estabelecimento de limites e regras claras sobre uso digital",
          "Participação em oficinas de orientação parental"
        ],
        rede: [
          "Vinculação a programas de contraturno com componente de educação digital",
          "Articulação com escola para abordagem integrada"
        ]
      };
    }
    if (percentage <= 75) {
      return {
        crianca: [
          "Acompanhamento profissional regular com ênfase em aspectos digitais",
          "Participação em grupo terapêutico específico, se disponível",
          "Implementação de plano estruturado de uso digital supervisionado"
        ],
        familia: [
          "Participação em programa de orientação parental",
          "Implementação de estratégias específicas de monitoramento e mediação",
          "Reorganização de rotinas familiares para inclusão de atividades não-digitais"
        ],
        rede: [
          "Avaliar notificação ficha SINAN e aos órgãos competentes",
          "Articulação com serviços da RAPS",
          "Vinculação a programas especializados disponíveis na comunidade"
        ]
      };
    }
    return {
      crianca: [
        "Avaliação psicológica completa e especializada",
        "Implementação de plano terapêutico individual",
        "Reconfiguração de padrões de uso digital"
      ],
      familia: [
        "Acompanhamento familiar",
        "Suporte para implementação de mudanças nas dinâmicas familiares"
      ],
      rede: [
        "Avaliar notificação ficha SINAN e aos órgãos competentes",
        "Mobilização de equipe multidisciplinar",
        "Estabelecimento de rede de suporte integrada"
      ]
    };
  };

  const allQuestionsAnswered = () => {
    const totalQuestions = sections.reduce((sum, s) => sum + s.questions.length, 0);
    return Object.keys(responses).length === totalQuestions;
  };

  const currentSectionAnswered = () => {
    return sections[currentSection].questions.every(q => responses[q.id] !== undefined);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 p-4 md:p-8 overflow-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-8 md:p-12">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }}></div>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
                  <div className="relative bg-white rounded-full p-6 shadow-2xl">
                    <Brain size={80} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                  IMVVAD
                </h1>
                <p className="text-xl md:text-2xl text-purple-100 font-light max-w-2xl">
                  Protegendo o Neurodesenvolvimento Infantojuvenil na Era Digital
                </p>
              </div>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo(a) ao IMVVAD!</h2>
                <p className="text-lg text-gray-600">Prezado(a) Profissional</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-l-4 border-blue-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div className="text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Este instrumento de rastreio é um <strong>protótipo</strong> que integra a pesquisa de Mestrado do Programa de Pós-graduação em Ciências e Tecnologia em Saúde da <strong>Universidade Federal de Brasília (UnB)</strong>, orientado pelo Dr. Prof. Jorge Luis Lopes Zeredo.
                    </p>
                    <p>
                      O IMVVAD foi criado como uma ferramenta prática de rastreio, voltada para profissionais que atuam com crianças e adolescentes brasileiros, com o objetivo de identificar e monitorar perfis mais suscetíveis aos riscos de violência digital. Seu uso é recomendado em contextos clínicos proporcionando uma base de dados capaz de subsidiar estratégias de intervenção.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">LGPD</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Este formulário <strong>não coleta dados pessoais identificáveis</strong> dos participantes e nem dos aplicadores. Ao preencher este formulário, o profissional declara ter lido o Manual de Aplicação, ter obtido o consentimento dos responsáveis legais e assentimento da criança/adolescente, e consente com o uso dos dados exclusivamente para fins de pesquisa e aprimoramento deste protótipo, em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-l-4 border-amber-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">DIREITOS AUTORAIS</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Este material é protegido por direitos autorais. É <strong>proibida a reprodução, distribuição ou modificação</strong> sem a devida autorização dos autores, conforme a legislação vigente <strong>(Lei nº 9.610/1998)</strong>. O IMVVAD é um protótipo experimental e deve ser utilizado apenas para fins acadêmicos e de pesquisa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border-l-4 border-purple-500 shadow-sm">
                <div className="flex items-start gap-3">
                  <BookOpen className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">INSTRUÇÕES DE APLICAÇÃO</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Este formulário deve ser preenchido pelo profissional devidamente capacitado com base nas informações coletadas durante a entrevista. Cada indicador possui uma pontuação específica que será somada ao final para estratificar o nível de vulnerabilidade.
                    </p>
                    <div className="bg-white/70 rounded-xl p-4">
                      <p className="font-semibold text-purple-900 mb-2">OBSERVAÇÕES E ORIENTAÇÕES:</p>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Adapte a linguagem à idade e maturidade da criança/adolescente</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Estabeleça vínculo antes de abordar temas sensíveis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Respeite o tempo de resposta e não force respostas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Use linguagem clara e evite jargões técnicos</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Observe linguagem corporal e sinais não-verbais</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-500 mr-2">•</span>
                          <span>Documente observações relevantes durante a entrevista</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border-2 border-rose-200 shadow-sm">
                <p className="text-center text-gray-800 font-semibold mb-2">LEMBRE-SE:</p>
                <p className="text-center text-gray-700 leading-relaxed">
                  Este guia é uma ferramenta de apoio. Este instrumento é um protótipo em validação. Os resultados devem ser interpretados com cautela por profissionais qualificados e <strong>não substituem avaliação clínica completa</strong>. A sensibilidade clínica e o julgamento profissional são fundamentais para uma avaliação adequada.
                </p>
              </div>

              <div className="text-center bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6">
                <p className="text-gray-700 mb-3">Para mais informações, consulte o <strong>Manual de Aplicação</strong>:</p>
                <a 
                  href="https://projetodemestrado-ohzm1rv.gamma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold underline decoration-2 underline-offset-4"
                >
                  <BookOpen size={20} />
                  Acessar Manual de Aplicação
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setShowIntro(false)}
                  className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 hover:from-indigo-700 hover:via-purple-700 hover:to-violet-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-3 text-lg"
                >
                  Iniciar Avaliação
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const { sectionScores, totalScore, imvvadPercentage } = calculateResults();
    const vulnerability = getVulnerabilityLevel(imvvadPercentage);
    const recommendations = getRecommendations(imvvadPercentage);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 mb-6">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-4 shadow-xl">
                  <Brain size={64} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl font-black text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Resultado da Avaliação IMVVAD
            </h1>
            <p className="text-center text-gray-600 mb-8 text-lg">
              Índice de Medição de Vulnerabilidades no Ambiente Digital
            </p>

            <div className={`${vulnerability.bgColor} border-2 ${vulnerability.borderColor} rounded-2xl p-8 mb-8 shadow-lg relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                  <h2 className={`text-3xl font-black ${vulnerability.color}`}>
                    {vulnerability.level}
                  </h2>
                  <div className={`text-5xl font-black ${vulnerability.color}`}>
                    {imvvadPercentage.toFixed(1)}%
                  </div>
                </div>
                <div className="w-full bg-white/50 rounded-full h-6 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full transition-all duration-1000 ${vulnerability.accentColor} shadow-lg`}
                    style={{ width: `${imvvadPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {sections.map(section => {
                const percentage = (sectionScores[section.code] / (section.questions.length * 2)) * 100;
                const Icon = section.icon;
                return (
                  <div key={section.code} className="bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-indigo-100 rounded-full p-2">
                        <Icon className="text-indigo-600" size={20} />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg">{section.name}</h3>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-600 font-medium">Pontuação:</span>
                      <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {sectionScores[section.code]} / {section.questions.length * 2}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-right font-semibold">{percentage.toFixed(0)}%</p>
                  </div>
                );
              })}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-l-4 border-blue-500 rounded-2xl p-6 shadow-md">
                <h3 className="font-black text-xl text-blue-900 mb-4 flex items-center">
                  <div className="bg-blue-500 rounded-full p-2 mr-3">
                    <Info className="text-white" size={20} />
                  </div>
                  Recomendações para Crianças/Adolescentes
                </h3>
                <ul className="space-y-3">
                  {recommendations.crianca.map((rec, i) => (
                    <li key={i} className="flex items-start bg-white/60 rounded-lg p-3">
                      <CheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-blue-600" size={20} />
                      <span className="text-blue-900 leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 border-l-4 border-purple-500 rounded-2xl p-6 shadow-md">
                <h3 className="font-black text-xl text-purple-900 mb-4 flex items-center">
                  <div className="bg-purple-500 rounded-full p-2 mr-3">
                    <Info className="text-white" size={20} />
                  </div>
                  Recomendações para Famílias ou Responsáveis Legais
                </h3>
                <ul className="space-y-3">
                  {recommendations.familia.map((rec, i) => (
                    <li key={i} className="flex items-start bg-white/60 rounded-lg p-3">
                      <CheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-purple-600" size={20} />
                      <span className="text-purple-900 leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border-l-4 border-indigo-500 rounded-2xl p-6 shadow-md">
                <h3 className="font-black text-xl text-indigo-900 mb-4 flex items-center">
                  <div className="bg-indigo-500 rounded-full p-2 mr-3">
                    <TrendingUp className="text-white" size={20} />
                  </div>
                  Articulação com a Rede
                </h3>
                <ul className="space-y-3">
                  {recommendations.rede.map((rec, i) => (
                    <li key={i} className="flex items-start bg-white/60 rounded-lg p-3">
                      <CheckCircle className="mr-3 mt-0.5 flex-shrink-0 text-indigo-600" size={20} />
                      <span className="text-indigo-900 leading-relaxed">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setShowResults(false);
                setResponses({});
                setCurrentSection(0);
                setShowIntro(true);
              }}
              className="w-full mt-10 bg-gradient-to-r from-gray-600 to-slate-700 hover:from-gray-700 hover:to-slate-800 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Realizar Nova Avaliação
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = sections[currentSection];
  const progress = ((currentSection + 1) / sections.length) * 100;
  const Icon = currentQ.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 p-8 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <Brain size={32} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <h1 className="text-2xl font-black tracking-tight">Formulário IMVVAD</h1>
                  <p className="text-purple-100 text-sm font-light">Avaliação de Vulnerabilidade Digital</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-bold text-gray-700">
                  Seção {currentSection + 1} de {sections.length}
                </span>
                <span className="text-sm font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {Math.round(progress)}% Concluído
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                <div 
                  className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 h-full transition-all duration-300 rounded-full shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border-2 border-indigo-200 shadow-md">
              <h2 className="text-2xl font-black text-gray-800 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                  <Icon className="text-white" size={20} />
                </div>
                {currentQ.name}
              </h2>
            </div>

            <div className="space-y-6">
              {currentQ.questions.map((question, qIndex) => (
                <div key={question.id} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <p className="font-bold text-gray-800 mb-5 text-lg leading-relaxed">
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-indigo-100 text-indigo-700 rounded-full text-sm font-black mr-2">
                      {qIndex + 1}
                    </span>
                    {question.text}
                  </p>
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <label
                        key={option.value}
                        className={`flex items-center p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                          responses[question.id] === option.value
                            ? 'bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-500 shadow-md scale-[1.02]'
                            : 'bg-white border-2 border-gray-200 hover:border-indigo-300 hover:shadow-sm'
                        }`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          checked={responses[question.id] === option.value}
                          onChange={() => handleResponse(question.id, option.value)}
                          className="mr-4 w-5 h-5 text-indigo-600 focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className={`font-medium ${
                          responses[question.id] === option.value ? 'text-indigo-900' : 'text-gray-700'
                        }`}>
                          {option.text}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-10 gap-4">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className={`flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  currentSection === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-gray-600 to-slate-700 text-white hover:from-gray-700 hover:to-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
              >
                <ChevronLeft className="mr-2" size={20} />
                Anterior
              </button>

              {currentSection < sections.length - 1 ? (
                <button
                  onClick={() => setCurrentSection(currentSection + 1)}
                  disabled={!currentSectionAnswered()}
                  className={`flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    currentSectionAnswered()
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Próxima
                  <ChevronRight className="ml-2" size={20} />
                </button>
              ) : (
                <button
                  onClick={() => setShowResults(true)}
                  disabled={!allQuestionsAnswered()}
                  className={`flex items-center px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                    allQuestionsAnswered()
                      ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:from-emerald-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle className="mr-2" size={20} />
                  Ver Resultados
                </button>
              )}
            </div>

            {!currentSectionAnswered() && (
              <div className="mt-6 flex items-center justify-center text-sm bg-amber-50 border-2 border-amber-300 rounded-xl p-4 text-amber-800 font-semibold">
                <AlertCircle size={18} className="mr-2 flex-shrink-0" />
                Por favor, responda todas as perguntas desta seção para continuar
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IMVVADForm;