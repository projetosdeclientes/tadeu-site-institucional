# PROMPT MESTRE — Site Tadeu França (projeto do zero)

> Cole este prompt inteiro em um projeto novo (Lovable ou Open Design). Ele já contém a paleta aprovada, a arquitetura de páginas, o conteúdo oficial organizado e as regras de compliance. Antes de gerar qualquer tela, apresente o plano de design (paleta final aplicada, tipografia, wireframe do hero) para aprovação.

---

## 0. CONTEXTO

Site institucional de Tadeu França — Terapeuta Comportamental ABA, Neuropsicopedagogo Clínico e Psicanalista Clínico, +30 anos de experiência em educação e desenvolvimento humano. Atende em Itaquera/Zona Leste de São Paulo (presencial) e online. Público: famílias de crianças, adolescentes e adultos com TEA, TDAH, dificuldades de aprendizagem, diagnóstico tardio, e pais que precisam de orientação.

Este é um projeto novo, do zero. Tentativas anteriores (Lovable e Open Design, a partir de um prompt de ChatGPT) resultaram em um site genérico e mal organizado — não repita esses erros.

---

## 1. SISTEMA DE MARCA (APROVADO — NÃO ALTERAR AS CORES)

**Paleta oficial — Terracota + Creme:**
| Uso | Cor | Hex |
|---|---|---|
| Terracota principal | destaque, títulos selecionados, ícones | `#A9604D` |
| Terracota secundário | hover, variações, elementos menores | `#C8876E` |
| Bege / Areia | fundos secundários, cards | `#D9B9A1` |
| Creme | fundo de seções | `#F1E4D4` |
| Off-white | fundo principal | `#FBF7F1` |

**Regra de uso:** tons claros (off-white e creme) dominam o layout. Terracota é usada **apenas** como destaque — botões, ícones, títulos selecionados, pequenos detalhes. O site não pode ficar "marrom" ou pesado.

**⚠️ Atenção de execução:** creme + terracota é a combinação mais usada por builders de IA quando não recebem direção nenhuma (fundo creme + serifada de alto contraste + terracota). As cores ficam como estão — foram escolhidas oficialmente. Mas para não cair no resto da fórmula genérica:
- **Não** usar uma serifada editorial de alto contraste "óbvia" (tipo Playfair Display) como reflexo automático de "site com fundo creme". Prefira uma tipografia com mais personalidade humana e menos "revista de moda" — algo com curvas mais orgânicas e peso mais suave (ex: Fraunces em corte leve, Lora, ou uma sans humanista forte como display, com uma serifada usada só em citações).
- **Não** montar o hero como badge-pill + headline centralizada + 2 botões + foto ao lado — isso é o template padrão de qualquer builder de IA.
- Ícones minimalistas sim, mas com traço consistente e desenhados como um pequeno sistema próprio — não o pacote genérico de ícones de qualquer biblioteca de UI.

**Direção visual desejada:** elegante, leve, contemporâneo, humano, sofisticado, acolhedor, profissional, limpo. Nunca: excesso de animação, sombras pesadas, gradientes exagerados, elementos piscando, carrossel desnecessário, estética infantil, aparência de template genérico, excesso de decoração.

**Diretrizes de layout:** bastante espaço em branco, fundos claros, cards elegantes com bordas suaves e cantos levemente arredondados, sombras discretas, divisões claras entre seções, imagens profissionais, microinterações e animações discretas.

**Elemento de assinatura (proposta):** um fio/linha condutora sutil em terracota que atravessa visualmente hero → trajetória → etapas do atendimento, reforçando a frase institucional "Cada pessoa tem uma história" e os 30+ anos de percurso. É o único elemento decorativo "com personalidade"; o resto do layout deve ser quieto e disciplinado ao redor dele.

---

## 2. TOM DE VOZ

Escrita como um profissional real: humana, acolhedora, clara, profissional, segura, simples, acessível. Evitar termos técnicos em excesso.

**Nunca usar:** "resultado garantido", "transformação garantida", "o melhor profissional", "tratamento revolucionário", "solução definitiva", ou qualquer comparação negativa/depreciativa com outras clínicas ou profissionais. O consultório particular é apresentado como um diferencial — nunca atacando outros modelos de atendimento.

**Eixo central da comunicação:** Acolher → Compreender → Acompanhar → Desenvolver.

---

## 3. ARQUITETURA DE PÁGINAS (5 páginas)

1. **Início**
2. **Sobre & Formação**
3. **Atendimentos** (inclui públicos, formatos, modalidades e demandas)
4. **Como Funciona**
5. **Contato** (inclui localização, documentos/reembolso e agenda)

Regra: cada informação vive em um único lugar. Onde outra página precisar referenciar algo (ex: Início mencionando "Como Funciona"), usar uma prévia curta com link — nunca duplicar o texto inteiro.

---

## 4. CONTEÚDO OFICIAL POR PÁGINA

### 4.1 — INÍCIO

**Hero**
- Nome: Tadeu França
- Profissão: Terapeuta Comportamental ABA | Neuropsicopedagogo Clínico | Psicanalista Clínico
- Posicionamento: "Desenvolvimento, comportamento e aprendizagem com acolhimento, experiência e estratégias individualizadas."
- Localização: Atendimento presencial em Itaquera e região da Zona Leste de São Paulo | Atendimento online
- Frase institucional: "Cada pessoa tem uma história. Meu trabalho começa quando escolho compreender essa história."
- CTAs: "Quero conhecer o atendimento" (WhatsApp) e "Conhecer minha trajetória" (→ Sobre & Formação)

**Quem é Tadeu (apresentação curta)**
Sou Tadeu França, Terapeuta Comportamental ABA, Neuropsicopedagogo Clínico e Psicanalista Clínico, com uma trajetória de mais de três décadas na área educacional e de desenvolvimento humano. Meu trabalho é voltado especialmente ao desenvolvimento, comportamento, aprendizagem e regulação emocional, com atenção especial às pessoas com TEA, TDAH, dificuldades de aprendizagem e às famílias que precisam de orientação e acolhimento.

**Propósito**
Meu trabalho busca acolher, compreender e desenvolver estratégias individualizadas para que cada pessoa possa avançar dentro de suas possibilidades, promovendo autonomia, desenvolvimento, aprendizagem, regulação comportamental e melhor qualidade de vida.

**Áreas de atuação (preview — 5 ou 6 itens + link "ver todas" → Atendimentos)**
Terapia Comportamental ABA · TEA · TDAH · Neuropsicopedagogia Clínica · Dificuldades de aprendizagem · Psicanálise Clínica *(lista completa nas notas técnicas abaixo)*

**Diferencial profissional (uma frase)**
Meu principal diferencial está na experiência de mais de três décadas na área pedagógica aliada à formação em ABA, Neuropsicopedagogia e Psicanálise, permitindo uma visão ampla da pessoa.

**Seção de destaque — Consultório particular** *(esta é a seção de maior destaque visual da Início)*
Título: "Um atendimento mais próximo, humano e individualizado"

O atendimento em consultório particular permite construir um acompanhamento mais próximo, individualizado e cuidadoso, respeitando a história, as necessidades e o ritmo de cada paciente. A proposta é oferecer continuidade no atendimento, permitindo que o profissional acompanhe de perto a evolução de cada caso e desenvolva uma compreensão mais completa do paciente e de sua família.

Pontos (cards ou lista, não os dois):
- **Ambiente mais acolhedor** — espaço pensado para proximidade, acolhimento e conforto.
- **Atendimento individualizado** — planejado conforme necessidades e objetivos de cada pessoa.
- **Continuidade com o mesmo profissional** — favorece vínculo, confiança e conhecimento aprofundado.
- **Devolutivas mais aprofundadas** — observações, avanços, dificuldades e próximos passos compartilhados com cuidado.
- **Relatórios mais elaborados** — quando necessário e dentro dos limites da atuação profissional.
- **Orientação mais próxima às famílias** — orientações individualizadas para o cotidiano.

Fechamento: "Mais do que oferecer um espaço para as sessões, a proposta é construir um acompanhamento baseado em vínculo, continuidade, escuta e atenção individualizada, colocando o paciente e sua família no centro do processo."

**Como funciona (preview — só os passos 01 a 04, com link "ver todas as etapas" → Como Funciona)**

**Localização (mini)**
Av. Maria Luiza Americano, 103 — Parque do Carmo, São Paulo/SP — CEP 08275-001. Link → Contato.

**CTA final da página**
"Você não precisa chegar com todas as respostas. Muitas famílias chegam justamente porque estão confusas, preocupadas ou não sabem qual caminho seguir. O primeiro passo pode ser simplesmente conversar." *(este texto aparece nesta forma completa apenas aqui e na página Contato — nas demais páginas, usar uma variação curta e específica ao contexto daquela página)*

---

### 4.2 — SOBRE & FORMAÇÃO

**Trajetória profissional**
Minha trajetória profissional está ligada há mais de três décadas à educação, ao desenvolvimento humano e ao acompanhamento de pessoas. Ao longo dessa caminhada, atuei em diferentes contextos educacionais e fui ampliando minha formação para compreender melhor as dificuldades de aprendizagem, o comportamento e o desenvolvimento. Essa experiência me levou a aprofundar meus estudos em ABA, Neuropsicopedagogia Clínica e Psicanálise Clínica, unindo minha experiência pedagógica à atuação terapêutica.

**O que me levou a escolher essa área**
A experiência dentro da educação mostrou-me que muitas dificuldades apresentadas por crianças, adolescentes e adultos não podem ser compreendidas apenas pelo aspecto acadêmico. É necessário olhar para o comportamento, as emoções, o ambiente familiar, a aprendizagem e a individualidade de cada pessoa.

**O que me motiva**
Ver pequenas conquistas se transformarem em grandes mudanças na vida do paciente e da família. Muitas vezes, aquilo que parece uma pequena evolução representa uma enorme vitória para uma família.

**Minha forma de trabalhar** *(combina os três pontos abaixo em uma narrativa só, sem repetir)*
O atendimento é individualizado: primeiro procuro compreender a história, as necessidades e os objetivos do paciente e da família — antes de qualquer diagnóstico existe uma pessoa, uma família, uma história. A partir disso, construo estratégias de acompanhamento que possam ser aplicadas de maneira prática no cotidiano. Como um profissional acolhedor, comprometido, humano, experiente, que realmente procura compreender cada paciente antes de propor qualquer intervenção.

**Valores** (lista)
Acolhimento · Respeito · Ética · Empatia · Escuta · Individualidade · Responsabilidade profissional · Humanização · Compromisso com o desenvolvimento e autonomia

**Citação de destaque** *(usar apenas aqui em todo o site, como momento visual isolado)*
"Cada pessoa tem uma história. Meu trabalho começa quando escolho compreender essa história."

**Formação e especializações**
- Terapeuta Comportamental ABA
- Neuropsicopedagogia Clínica
- Psicanálise Clínica
- Pedagogia
- Magistério
- Pós-graduação/formação em ABA
- Ludopedagogia
- Neuroanatomia aplicada às dificuldades de aprendizagem
- Práticas Pedagógicas Inclusivas

Destaque visual maior para: **ABA + Neuropsicopedagogia Clínica + mais de três décadas na área pedagógica** — esse conjunto é o posicionamento profissional central.

**Certificados**
"Os certificados das formações estão disponíveis e podem ser apresentados quando solicitado."

> ⚠️ **REGRA OBRIGATÓRIA PARA QUEM FOR POPULAR ESTA SEÇÃO:** se os PDFs dos certificados forem fornecidos, leia todos, confirme nome exato do curso, nome oficial da instituição, modalidade, carga horária e datas quando relevante. Use os certificados como fonte primária. **Nunca invente informação ausente nem altere o nome oficial de um curso.** Formação/extensão em TDAH, extensão em Denver e formação complementar em Neurociência Infantil **só entram no site se confirmadas por documento** — até lá, não publicar.

---

### 4.3 — ATENDIMENTOS

**Públicos atendidos**
Crianças · Adolescentes · Adultos · Pais e familiares · Pessoas com TEA · Pessoas com TDAH · Pessoas com dificuldades de aprendizagem · Adolescentes e adultos em processo de compreensão de diagnóstico tardio

**Diferença entre os públicos**
Com crianças, pode haver maior participação dos pais e utilização de estratégias lúdicas e comportamentais. Com adolescentes e adultos, o foco pode envolver: autonomia, regulação emocional, regulação comportamental, organização da rotina, habilidades sociais, dificuldades relacionadas ao diagnóstico tardio e qualidade de vida.

**Formatos de atendimento**
Atendimento individual · Orientação de pais · Orientação familiar · Acompanhamento de adolescentes e adultos · Orientação relacionada ao contexto escolar · Assessoria para escolas e profissionais

**Modalidades**
Presencial (Itaquera/Zona Leste) e online.

**Escopo de atuação** *(frases curtas e diretas, sem inventar métodos específicos)*
- **Avaliação e investigação:** "Realizo avaliação e investigação de casos, dentro dos limites da minha atuação profissional."
- **Relatórios:** emitidos quando necessário e conforme a finalidade.
- **Diagnóstico tardio:** acompanhamento para diagnóstico tardio em crianças e adultos — *não afirmar que realiza diagnóstico médico ou qualquer modalidade específica de diagnóstico.*
- **Atuação junto à escola:** visita a escola quando necessário, como parte da articulação com o contexto escolar.

Quando necessário e dentro dos limites éticos e profissionais, o trabalho pode envolver orientação aos pais, diálogo com a escola e articulação com outros profissionais, buscando maior coerência nas estratégias utilizadas nos diferentes ambientes da vida do paciente.

**Principais demandas** *(lista única e consolidada — não duplicar em outras seções)*
TEA · TDAH · Dificuldades comportamentais · Dificuldades de aprendizagem · Regulação emocional e comportamental · Orientação familiar · Dificuldades relacionadas à escola/inclusão escolar · Diagnóstico tardio (adolescentes e adultos) · Adaptação após diagnóstico · Habilidades sociais · Desenvolvimento de autonomia · Orientação para pais de crianças atípicas

Destaque (mais frequentes): TEA, TDAH, dificuldades comportamentais, dificuldades de aprendizagem e orientação familiar.

**Como as demandas são trabalhadas**
Por meio de avaliação inicial, escuta, identificação das necessidades, definição de objetivos e construção de estratégias individualizadas. O acompanhamento busca transformar as estratégias terapêuticas em recursos que possam ser utilizados na vida cotidiana.

---

### 4.4 — COMO FUNCIONA

Seção visual em etapas (o elemento de assinatura — o fio condutor — passa por aqui):

**01 — Primeiro contato**
O primeiro contato pode ocorrer pelo WhatsApp ou pelas redes sociais. Nesse momento são levantadas informações iniciais sobre a demanda e explicado como funciona o atendimento.

**02 — Entrevista inicial**
Compreender a história do paciente, principais dificuldades, rotina, contexto familiar, contexto escolar ou profissional e os objetivos do acompanhamento.

**03 — Compreensão das necessidades**
Por meio da escuta, observação, levantamento da história, análise das demandas apresentadas e, quando necessário, instrumentos e estratégias compatíveis com a atuação profissional.

**04 — Planejamento individualizado**
Definido a partir das necessidades, prioridades e objetivos identificados no processo inicial.

**05 — Sessões**
Estruturadas de acordo com o perfil e os objetivos do paciente: estratégias comportamentais, atividades direcionadas, orientação, desenvolvimento de habilidades e acompanhamento das dificuldades apresentadas.

**06 — Acompanhamento da evolução**
Observando mudanças comportamentais, desenvolvimento de habilidades, dificuldades persistentes e objetivos alcançados.

**07 — Participação da família**
Muito importante, especialmente no atendimento infantil. Os pais podem receber orientações para compreender melhor os comportamentos e utilizar estratégias adequadas no cotidiano.

**Princípio do atendimento**
"O atendimento não é baseado em fórmulas prontas. Cada pessoa é única e o planejamento precisa respeitar sua história, suas necessidades e seu ritmo de desenvolvimento."

---

### 4.5 — CONTATO

**WhatsApp:** (11) 93220-1048 — principal CTA do site
**E-mail:** terapeutatadeufranca@gmail.com
**Instagram:** @tadeufranca_terapeuta

**Como funciona o primeiro contato**
Entrar em contato diretamente para obter informações e verificar disponibilidade. Para facilitar, podem ser solicitadas (sem virar formulário obrigatório — objetivo é facilitar, não criar barreira): nome, idade do paciente, principal motivo da procura, se já existe diagnóstico, se será presencial ou online, melhor forma de contato.

**Agenda**
Segunda-feira: 18h às 20h · Terça-feira: 16h30 às 19h30 · Quinta-feira: 16h30 às 19h30 · Sábado: 09h às 13h *(presencial e online — não inventar outros dias)*

**Localização**
Av. Maria Luiza Americano, 103 — Parque do Carmo, São Paulo/SP — CEP 08275-001. Atendimento presencial e online. Um dos diferenciais é oferecer atendimento próximo às famílias da Zona Leste, evitando que precisem se deslocar para regiões distantes ou grandes clínicas.

> ⚠️ **Não inventar:** ponto de referência, estacionamento, detalhes de transporte público ou qualquer outra informação física do consultório que não tenha sido fornecida.

**FAQ — Documentos** (accordion)
- *O que pode ser emitido?* Recibos, declarações, relatórios e documentos relacionados ao acompanhamento.
- *Como solicitar?* Diretamente no momento do atendimento ou previamente, informando a finalidade do documento para verificação da possibilidade de emissão.
- *Reembolso?* "Eventuais regras de reembolso devem ser verificadas diretamente com o plano de saúde do paciente." *(usar exatamente esta frase — reembolso ainda não foi confirmado pelo Tadeu, não afirmar reembolso garantido)*

**CTA final**
"Você não precisa chegar com todas as respostas. Muitas famílias chegam justamente porque estão confusas, preocupadas ou não sabem qual caminho seguir. O primeiro passo pode ser simplesmente conversar."

**Link WhatsApp:** `https://wa.me/5511932201048`
**Mensagem pré-preenchida:** "Olá, Tadeu! Conheci seu trabalho pelo site e gostaria de obter mais informações sobre o atendimento."

---

## 5. VARIAÇÕES DE CTA (usar uma por página, nunca repetir o mesmo texto)

- "Quero conhecer o atendimento"
- "Falar com Tadeu"
- "Agendar uma conversa"
- "Tirar minhas dúvidas"
- "Entrar em contato"

Botão principal sempre direciona ao WhatsApp.

---

## 6. FOOTER

Tadeu França — Terapeuta Comportamental ABA, Neuropsicopedagogo Clínico e Institucional, Psicanalista Clínico. Itaquera — São Paulo/SP.

WhatsApp: (11) 93220-1048 · E-mail: terapeutatadeufranca@gmail.com · Instagram: @tadeufranca_terapeuta

Navegação (atualizada para a nova arquitetura de 5 páginas):
Início · Sobre & Formação · Atendimentos · Como Funciona · Contato

---

## 7. CHECKLIST FINAL ANTES DE ENTREGAR

- [ ] Paleta aplicada exatamente com os hex acima, tons claros dominando
- [ ] Nenhuma serifada de alto contraste "padrão" nem hero de badge+2botões+foto genérico
- [ ] Menu com 5 itens
- [ ] Nenhuma lista/parágrafo repetido literalmente em duas páginas (checar especialmente "demandas" e "como funciona")
- [ ] Frase de reembolso usada exatamente como especificado, sem promessa de reembolso garantido
- [ ] Nenhuma informação de localização inventada além do endereço fornecido
- [ ] Nenhuma frase da lista proibida ("resultado garantido" etc.) e nenhuma comparação negativa com outras clínicas
- [ ] Certificados: nenhum dado de instituição/carga horária/data inventado sem confirmação em documento
- [ ] Responsivo mobile-first, foco de teclado visível, respeita `prefers-reduced-motion`
- [ ] Plano de design (paleta aplicada, tipografia, wireframe do hero) apresentado antes do código completo
