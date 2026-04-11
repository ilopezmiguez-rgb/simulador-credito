Plan de Implementación: Actualización del Modo Explicación
Hito 1: Estructura de Datos (Glosario)
En lugar de escribir el texto directamente en el HTML, definiremos un objeto en JavaScript. Esto permitirá que el simulador sea más dinámico en el futuro.

Bloque de Código: Definición de Contenidos
Agregá esto al inicio de tu sección de scripts:

JavaScript
const EXPLICACIONES_FASE2 = [
  {
    titulo: "¿Qué es el CFTEA?",
    cuerpo: "Es el Costo Financiero Total Efectivo Anual. Incluye intereses, impuestos (IVA), seguros y comisiones. Es el número real que debés mirar para comparar préstamos."
  },
  {
    titulo: "El impacto del IVA",
    cuerpo: "Los intereses gravan un 21% de IVA para consumidores finales. El simulador desglosa este impuesto para que veas qué parte de tu cuota va al fisco y no al banco."
  },
  {
    titulo: "TNA vs. TEA",
    cuerpo: "La TNA es informativa. La TEA es la tasa real por capitalizar intereses mes a mes. Sumando impuestos y seguros a la TEA, obtenés el CFTEA final."
  },
  {
    titulo: "Seguros de Vida",
    cuerpo: "Cubre el saldo deudor en caso de fallecimiento. Se calcula como una alícuota (ej. 0.2%) sobre el capital que aún debés, sumando pesos extra a la cuota."
  },
  {
    titulo: "Tasa Real (vs Inflación)",
    cuerpo: "Si el CFTEA es menor a la inflación, el crédito se 'licúa'. Si el CFTEA es mayor, estás devolviendo más poder adquisitivo del que recibiste."
  },
  {
    titulo: "Efecto Francés + IVA",
    cuerpo: "Al principio pagás más intereses y, por ende, más IVA. A medida que cancelás capital, el componente impositivo de la cuota baja gradualmente."
  }
];
Hito 2: Refactorización del HTML
Debemos limpiar el contenedor de explicaciones para que se llene automáticamente vía JavaScript.

Bloque de Código: Contenedor Limpio
Buscá el div con id explanations y reemplazalo por esto:

HTML
<div class="explanations" id="explanations">
  </div>
Hito 3: Lógica de Renderizado
Crearemos una función que "dibuje" las tarjetas basándose en el objeto del Hito 1.

Bloque de Código: Función de Inyección
Agregá esta lógica dentro de tu sección de inicialización:

JavaScript
function renderExplanations() {
  const container = document.getElementById("explanations");
  container.innerHTML = EXPLICACIONES_FASE2.map(exp => `
    <div class="explain-card">
      <h3>${exp.titulo}</h3>
      <p>${exp.cuerpo}</p>
    </div>
  `).join('');
}

// Llamar a la función al cargar la página
renderExplanations();
Hito 4: Integración con el Switch de Modo Realista
Para que la experiencia sea fluida, haremos que el Modo Explicación se active automáticamente si el usuario activa el Modo Realista por primera vez.

Bloque de Código: Trigger de Ayuda
Modificá el listener del modoRealista:

JavaScript
document.getElementById("modoRealista").addEventListener("change", (e) => {
  if (e.target.checked) {
    // Si activa el modo realista, resaltamos la tarjeta de CFTEA e IVA
    const explainToggle = document.getElementById("explainToggle");
    if (!explainToggle.checked) {
      explainToggle.click(); // Abre el modo explicación automáticamente
      showToast("Se activaron las definiciones de costo real");
    }
  }
  update();
});
Verificación de Calidad (DoD)
[ ] Las 6 nuevas tarjetas se visualizan correctamente en el grid.

[ ] El texto incluye las referencias a CFTEA e IVA.

[ ] El diseño mantiene la coherencia visual con las fuentes Space Grotesk y colores del sistema.

[ ] Al abrir el "Modo Explicación", el scroll es suave y no rompe el layout.