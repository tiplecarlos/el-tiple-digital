document.addEventListener("DOMContentLoaded", () => {
  const contenedorModulo1 = document.getElementById("mod-historia");
  if (!contenedorModulo1) return;

  // Datos históricos estructurados a partir de "Los caminos del tiple" (Puerta Zuluaga, 1988)
  const etapasPuerta = [
    {
      id: "etapa-1",
      periodo: "Siglos XVI – XVII",
      titulo: "1. Los caminos de la conquista y raíces ibéricas",
      subtitulo: "De la vihuela de mano y la guitarra renacentista al vocablo «tiple»",
      texto: `
        Según documenta <strong>David Puerta Zuluaga (1988)</strong> en <em>Los caminos del tiple</em>,
        el origen del tiple colombiano se encuentra en la llegada al Nuevo Reino de Granada de los cordófonos
        pulsados europeos durante la Colonia, principalmente la <strong>vihuela de mano</strong>, la
        <strong>guitarra renacentista</strong> (de cuatro órdenes) y la <strong>guitarra barroca</strong> (de cinco órdenes).
      `,
      detalleOrganologico: `
        En el léxico musical hispánico de los siglos XVI y XVII, la palabra <em>«tiple»</em> designaba
        originalmente la voz más aguda (soprano) dentro de la polifonía vocal e instrumental. Con el tiempo,
        el término pasó a nombrar a las guitarrillas de tamaño reducido y afinación más aguda fabricadas por
        artesanos locales en los Andes colombianos.
      `,
      cuerdas: "4 a 5 órdenes (cuerdas de tripa)",
      hito: "Adaptación criolla de la vihuela y la guitarrilla renacentista en territorio andino."
    },
    {
      id: "etapa-2",
      periodo: "Siglo XIX",
      titulo: "2. Mestizaje criollo y transición del encordado",
      subtitulo: "De 4 y 5 cuerdas sencillas a los formatos de 8, 10 y 12 cuerdas metálicas",
      texto: `
        Durante el siglo XIX, el tiple se arraigó profundamente en las prácticas campesinas, festivas y
        libertarias de la región andina (Altiplano Cundiboyacense, Santanderes, Tolima Grande, Antioquia y Gran Cauca).
        Puerta Zuluaga (1988) rastrea cómo los constructores sustituyeron progresivamente las cuerdas de tripa
        por <strong>cuerdas metálicas de acero</strong> para ganar proyección sonora en espacios abiertos.
      `,
      detalleOrganologico: `
        En esta etapa coexistieron diversas configuraciones: el <strong>tiple de 5 cuerdas sencillas</strong>,
        el de <strong>8 cuerdas</strong> (cuatro órdenes dobles) y el de <strong>10 cuerdas</strong>, hasta llegar
        a los doce clavijeros. Este proceso motivó la aparición de los primeros métodos impresos en Colombia:
        el de <strong>José Viteri (1867)</strong> y el de <strong>Telésforo D'Alemán (1885)</strong>.
      `,
      cuerdas: "5, 8, 10 y primeras versiones de 12 cuerdas",
      hito: "Publicación de los métodos pioneros de Viteri (1867) y D'Alemán (1885)."
    },
    {
      id: "etapa-3",
      periodo: "Finales s. XIX – Inicios s. XX",
      titulo: "3. Consolidación de los cuatro órdenes triples",
      subtitulo: "Octavación interna, Pedro Morales Pino y la Lira Colombiana",
      texto: `
        Entre finales del siglo XIX y comienzos del XX se estabilizó la morfología moderna del tiple colombiano:
        <strong>doce cuerdas metálicas distribuidas en cuatro órdenes triples</strong>, incorporando la
        <em>requintilla</em> u <strong>octavación interna</strong> (cuerda central entorchada una octava más grave)
        en los órdenes segundo (Si), tercero (Sol) y cuarto (Re), mientras el primer orden (Mi) mantiene tres
        cuerdas de acero al unísono.
      `,
      detalleOrganologico: `
        Puerta Zuluaga (1988) destaca el papel decisivo del maestro <strong>Pedro Morales Pino</strong> y su
        agrupación la <strong>Lira Colombiana</strong> (fundada hacia 1896–1899) en la estandarización de su
        afinación moderna, su escritura en pentagrama y su legitimación en salas de concierto nacionales e internacionales.
      `,
      cuerdas: "12 cuerdas en 4 órdenes triples (Mi-Si-Sol-Re)",
      hito: "Estandarización moderna del tiple y consolidación del Trío Andino (bandola, tiple y guitarra)."
    },
    {
      id: "etapa-4",
      periodo: "Siglos XX – XXI",
      titulo: "4. Escuela Vallecaucana, tiple solista y Patrimonio Nacional",
      subtitulo: "Proyección académica y declaratoria mediante la Ley 997 de 2005",
      texto: `
        A lo largo del siglo XX, el tiple amplió su función tradicional de instrumento acompañante de bambucos,
        pasillos y torbellinos para consolidarse como <strong>instrumento melódico y solista de concierto</strong>.
        En el suroccidente colombiano, instituciones como el <strong>Instituto Popular de Cultura (IPC)</strong> y el
        <strong>Instituto Departamental de Bellas Artes</strong> en Cali impulsaron la sistematización académica y el
        repertorio solista de compositores vallecaucanos.
      `,
      detalleOrganologico: `
        Este recorrido histórico culminó jurídicamente con la <strong>Ley 997 de 2005</strong>, mediante la cual el
        Congreso de Colombia declaró al tiple colombiano como <strong>Patrimonio Cultural y Artístico de la Nación</strong>
        y lo exaltó como instrumento autóctono nacional, en articulación con la Ley General de Cultura (Ley 397 de 1997)
        y la Convención de la UNESCO (2003).
      `,
      cuerdas: "12 cuerdas (estándar de concierto y tradición)",
      hito: "Ley 997 de 2005: Reconocimiento como Patrimonio Cultural y Artístico de la Nación."
    }
  ];

  // Formatos y contextos de circulación
  const formatosData = {
    trio: {
      titulo: "Trío Andino Colombiano",
      integracion: "Bandola andina, tiple y guitarra",
      descripcion:
        "Formato emblemático de la música de cámara andina consolidado desde finales del siglo XIX. El tiple cumple una función articuladora entre la melodía de la bandola y los bajos de la guitarra, aportando su característico entramado armónico y rítmico."
    },
    estudiantina: {
      titulo: "Estudiantina (Práctica Orquestal)",
      integracion: "Bandolas, tiples, guitarras y contrabajo",
      descripcion:
        "Agrupación colectiva fundamental en los procesos formativos institucionales y comunitarios, como la Estudiantina del Instituto Popular de Cultura (IPC) en Cali y la Escuela de Música de Chicoral en La Cumbre (Valle del Cauca)."
    },
    solista: {
      titulo: "Tiple Solista y de Concierto",
      integracion: "Tiple solo (polifonía y melodía acompañada)",
      descripcion:
        "Desarrollado con especial fuerza en el siglo XX y XXI en centros como el Valle del Cauca, donde el intérprete ejecuta simultáneamente melodía, acompañamiento armónico y líneas de bajo en géneros como bambuco, pasillo, vals y preludio."
    }
  };

  // Preguntas de comprobación formativa del Módulo 1
  const preguntasM1 = [
    {
      pregunta: "1. Según David Puerta Zuluaga (1988), ¿qué instrumentos europeos constituyen el antecedente organológico directo del tiple colombiano?",
      opciones: [
        "El laúd árabe y el clavecín barroco.",
        "La vihuela de mano y la guitarra renacentista (de cuatro y cinco órdenes).",
        "El violonchelo y la mandolina napolitana."
      ],
      correcta: 1,
      retroOk: "Correcto. Puerta Zuluaga (1988) documenta cómo la vihuela de mano y la guitarra renacentista se adaptaron en el Nuevo Reino de Granada dando origen al tiple.",
      retroError: "Revisa la Etapa 1 (Siglos XVI–XVII): los antecedentes directos son la vihuela de mano y la guitarra renacentista."
    },
    {
      pregunta: "2. ¿Cómo evolucionó el encordado del tiple entre el siglo XIX y comienzos del siglo XX?",
      opciones: [
        "Pasó de formatos antiguos de 4 y 5 cuerdas (y variantes de 8 y 10) hasta consolidar 12 cuerdas metálicas en 4 órdenes triples.",
        "Siempre tuvo 12 cuerdas de nailon desde la época colonial.",
        "Se redujo de 12 cuerdas metálicas a 6 cuerdas simples."
      ],
      correcta: 0,
      retroOk: "Exacto. Entre el siglo XIX y comienzos del XX se consolidaron las 12 cuerdas metálicas en 4 órdenes triples con octavación interna del 2.º al 4.º orden.",
      retroError: "Revisa la Etapa 2 y 3: el tiple transitó desde 5 cuerdas hasta estabilizar las 12 cuerdas metálicas en 4 órdenes triples."
    },
    {
      pregunta: "3. ¿Qué norma declaró al tiple colombiano como Patrimonio Cultural y Artístico de la Nación?",
      opciones: [
        "La Ley 115 de 1994.",
        "La Ley 997 de 2005.",
        "El Decreto 1860 de 1994."
      ],
      correcta: 1,
      retroOk: "Correcto. La Ley 997 de 2005 reconoció oficialmente al tiple como Patrimonio Cultural y Artístico de la Nación.",
      retroError: "Consulta la Etapa 4: fue la Ley 997 de 2005 la que otorgó este reconocimiento patrimonial."
    }
  ];

  // Renderizado completo del Módulo 1
  contenedorModulo1.innerHTML = `
    <div class="module-header">
      <span class="module-kicker">Módulo 1 · Identidad, Historia y Patrimonio</span>
      <h2>Historia del Tiple Colombiano: <em>Los caminos del tiple</em></h2>
      <p>
        Basado en la investigación histórico-organológica de <strong>David Puerta Zuluaga (1988)</strong> y en la proyección
        patrimonial y regional del instrumento en Colombia.
      </p>
    </div>

    <!-- BLOQUE 1: LÍNEA DE TIEMPO INTERACTIVA -->
    <section class="card block-spacer">
      <h3>1. Recorrido Histórico (Puerta Zuluaga, 1988)</h3>
      <p class="hint">Selecciona cada etapa histórica para explorar la transformación cultural y constructiva del instrumento:</p>

      <div class="timeline-tabs" role="tablist" aria-label="Etapas históricas del tiple">
        ${etapasPuerta
          .map(
            (etapa, idx) => `
          <button class="tab-pill ${idx === 0 ? "active" : ""}" data-etapa="${etapa.id}" role="tab">
            ${etapa.periodo}
          </button>
        `
          )
          .join("")}
      </div>

      <div id="visor-etapa-puerta" class="timeline-content"></div>
    </section>

    <!-- BLOQUE 2: SÍNTESIS DE EVOLUCIÓN ORGANOLÓGICA -->
    <section class="card block-spacer">
      <h3>2. Síntesis de la Evolución del Encordado</h3>
      <p class="hint">Comparativa histórica documentada en <em>Los caminos del tiple</em> (Puerta Zuluaga, 1988):</p>
      <div class="table-responsive">
        <table class="history-table">
          <thead>
            <tr>
              <th>Época</th>
              <th>Configuración</th>
              <th>Material de cuerdas</th>
              <th>Rasgo distintivo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Siglos XVI–XVII</strong></td>
              <td>4 a 5 órdenes (vihuela / guitarrilla)</td>
              <td>Tripa animal</td>
              <td>Denominación «tiple» asociada al registro agudo.</td>
            </tr>
            <tr>
              <td><strong>Siglo XIX (inicios)</strong></td>
              <td>5 cuerdas sencillas / 8 cuerdas (4 dobles)</td>
              <td>Transición de tripa a acero</td>
              <td>Arraigo en músicas campesinas, torbellinos y bambucos.</td>
            </tr>
            <tr>
              <td><strong>Finales s. XIX</strong></td>
              <td>10 a 12 cuerdas (4 órdenes triples)</td>
              <td>Acero y entorchado metálico</td>
              <td>Primeros métodos (Viteri, 1867; D'Alemán, 1885).</td>
            </tr>
            <tr>
              <td><strong>Siglo XX – Actualidad</strong></td>
              <td>12 cuerdas (4 órdenes triples octavados)</td>
              <td>Acero + central entorchada (2.º–4.º)</td>
              <td>Lira Colombiana, tiple solista y Ley 997 de 2005.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- BLOQUE 3: FORMATOS MUSICALES Y CONTEXTOS -->
    <section class="card block-spacer">
      <h3>3. Formatos de Interpretación y Práctica Colectiva</h3>
      <p class="hint">Explora los principales escenarios donde el tiple ha desarrollado su identidad sonora:</p>
      <div class="timeline-tabs" id="formatos-tabs">
        <button class="tab-pill active" data-formato="trio">Trío Andino Colombiano</button>
        <button class="tab-pill" data-formato="estudiantina">Estudiantina (IPC / Chicoral)</button>
        <button class="tab-pill" data-formato="solista">Tiple Solista</button>
      </div>
      <div id="visor-formato" class="timeline-content"></div>
    </section>

    <!-- BLOQUE 4: AUTOEVALUACIÓN FORMATIVA -->
    <section class="card block-spacer quiz-card">
      <h3>4. Comprobación de Aprendizaje (Módulo 1)</h3>
      <p class="hint">Responde las siguientes preguntas para verificar tu comprensión histórica:</p>
      <div id="quiz-m1-container"></div>
    </section>

    <!-- BLOQUE 5: LISTA DE CHEQUEO UNIDAD DIDÁCTICA 1 -->
    <section class="card">
      <h3>5. Registro de Avance · Unidad Didáctica 1 (Semana 1)</h3>
      <p class="hint">Marca las actividades completadas en tu estudio autónomo (se guardan automáticamente en este dispositivo):</p>
      <div class="checklist-box" id="checklist-u1">
        <label class="check-item">
          <input type="checkbox" data-check="u1-historia" />
          <span>Leí las cuatro etapas históricas del tiple según David Puerta Zuluaga (1988).</span>
        </label>
        <label class="check-item">
          <input type="checkbox" data-check="u1-encordado" />
          <span>Comprendí cómo evolucionó el encordado desde 5 cuerdas hasta los 4 órdenes triples de 12 cuerdas.</span>
        </label>
        <label class="check-item">
          <input type="checkbox" data-check="u1-patrimonio" />
          <span>Reconozco el valor patrimonial del tiple (Ley 997 de 2005) y sus formatos tradicionales.</span>
        </label>
        <label class="check-item">
          <input type="checkbox" data-check="u1-quiz" />
          <span>Completé las preguntas de comprobación del Módulo 1.</span>
        </label>
      </div>
      <p class="progress-summary" id="progreso-u1-texto"></p>
    </section>
  `;

  // Lógica 1: Visor de etapas de Puerta Zuluaga
  const visorEtapa = document.getElementById("visor-etapa-puerta");
  const btnsEtapa = contenedorModulo1.querySelectorAll("[data-etapa]");

  function renderEtapa(id) {
    const etapa = etapasPuerta.find((e) => e.id === id) || etapasPuerta[0];
    visorEtapa.innerHTML = `
      <div class="etapa-header">
        <h4>${etapa.titulo}</h4>
        <p class="etapa-sub">${etapa.subtitulo}</p>
      </div>
      <p style="margin-bottom: 0.75rem;">${etapa.texto}</p>
      <p style="margin-bottom: 0.9rem;">${etapa.detalleOrganologico}</p>
      <div class="etapa-meta">
        <span><strong>Encordado:</strong> ${etapa.cuerdas}</span>
        <span><strong>Hito clave:</strong> ${etapa.hito}</span>
      </div>
    `;
  }

  btnsEtapa.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnsEtapa.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderEtapa(btn.dataset.etapa);
    });
  });
  renderEtapa("etapa-1");

  // Lógica 2: Visor de formatos musicales
  const visorFormato = document.getElementById("visor-formato");
  const btnsFormato = contenedorModulo1.querySelectorAll("[data-formato]");

  function renderFormato(key) {
    const f = formatosData[key] || formatosData.trio;
    visorFormato.innerHTML = `
      <h4>${f.titulo}</h4>
      <p style="font-size:0.86rem; color:#6b3b1e; font-weight:600; margin-bottom:0.5rem;">
        Conformación: ${f.integracion}
      </p>
      <p>${f.descripcion}</p>
    `;
  }

  btnsFormato.forEach((btn) => {
    btn.addEventListener("click", () => {
      btnsFormato.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderFormato(btn.dataset.formato);
    });
  });
  renderFormato("trio");

  // Lógica 3: Quiz interactivo de 3 preguntas
  const quizContainer = document.getElementById("quiz-m1-container");
  preguntasM1.forEach((item, qIdx) => {
    const bloque = document.createElement("div");
    bloque.className = "quiz-block";
    bloque.innerHTML = `
      <p class="quiz-q"><strong>${item.pregunta}</strong></p>
      <div class="quiz-options">
        ${item.opciones
          .map(
            (op, oIdx) => `
          <button class="quiz-opt" data-q="${qIdx}" data-o="${oIdx}">${op}</button>
        `
          )
          .join("")}
      </div>
      <p class="quiz-feedback" id="fb-m1-${qIdx}" aria-live="polite"></p>
    `;
    quizContainer.appendChild(bloque);
  });

  quizContainer.addEventListener("click", (e) => {
    const btn = e.target.closest(".quiz-opt");
    if (!btn) return;
    const qIdx = Number(btn.dataset.q);
    const oIdx = Number(btn.dataset.o);
    const preguntaObj = preguntasM1[qIdx];
    const opcionesHermanas = btn.parentElement.querySelectorAll(".quiz-opt");
    const fb = document.getElementById(`fb-m1-${qIdx}`);

    opcionesHermanas.forEach((b) => b.classList.remove("correct", "wrong"));

    if (oIdx === preguntaObj.correcta) {
      btn.classList.add("correct");
      fb.style.color = "#236b3b";
      fb.textContent = preguntaObj.retroOk;
    } else {
      btn.classList.add("wrong");
      fb.style.color = "#9e2a2b";
      fb.textContent = preguntaObj.retroError;
    }
  });

  // Lógica 4: Lista de chequeo persistente en localStorage
  const STORAGE_KEY = "tiple_digital_u1_checks";
  const checkboxes = contenedorModulo1.querySelectorAll("#checklist-u1 input[type='checkbox']");
  const textoProgreso = document.getElementById("progreso-u1-texto");

  function cargarChecklist() {
    const guardado = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    checkboxes.forEach((cb) => {
      cb.checked = Boolean(guardado[cb.dataset.check]);
    });
    actualizarProgreso();
  }

  function actualizarProgreso() {
    const total = checkboxes.length;
    const marcados = Array.from(checkboxes).filter((cb) => cb.checked).length;
    textoProgreso.textContent = `Progreso de la Unidad 1: ${marcados} de ${total} criterios completados.`;
  }

  checkboxes.forEach((cb) => {
    cb.addEventListener("change", () => {
      const estado = {};
      checkboxes.forEach((item) => {
        estado[item.dataset.check] = item.checked;
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
      actualizarProgreso();
    });
  });

  cargarChecklist();
});
