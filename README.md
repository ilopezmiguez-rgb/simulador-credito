# Crédito Claro — Simulador de Crédito Transparente

Prototipo MVP de un simulador de crédito personal diseñado para que los usuarios entiendan el costo real de un préstamo antes de solicitarlo. Sin letra chica.

## Demo

Archivo único: `index.html`. Abrir en cualquier navegador moderno, sin dependencias locales.

## Funcionalidades

- **Simulador interactivo** — monto, plazo y TNA con sliders y campos numéricos sincronizados. Cálculo en tiempo real usando el sistema francés (cuota fija).
- **Visualización de costos** — gráfico de dona (Chart.js) que desglosa capital vs. intereses y muestra cuánto se devuelve por cada $100 recibidos.
- **Modo explicación** — panel desplegable con definiciones simples de cuota, TNA, tasa real y sistema francés.
- **Comparador de escenarios** — compará dos combinaciones de monto/plazo/tasa lado a lado con insight automático sobre la diferencia real.
- **Módulo Tasa vs. Inflación** — consume la API de ArgentinaDatos (INDEC) para contrastar la TNA con la inflación interanual, anualizada a 6 meses, o un valor manual. Incluye caché local y fallback si la API no responde.

## Stack

- HTML + CSS + JavaScript vanilla
- [Chart.js 4.4](https://www.chartjs.org/) (CDN)
- API pública: ArgentinaDatos · INDEC

## Notas del producto

Este simulador valida la hipótesis de que **mayor transparencia en el costo del crédito incrementa la conversión a solicitud**.

**KPIs clave:**
- Completion rate (usuario llega a ver resultados completos)
- Uso del comparador de escenarios
- Interacción con el modo explicación
- CTR del CTA de solicitud

**Hipótesis testeables:**
- La visualización gráfica mejora la comprensión del costo real
- Comparar escenarios reduce la indecisión antes de solicitar
- El lenguaje simple aumenta la confianza del usuario

**Fuera de alcance (v1):**
- Scoring real
- Ofertas personalizadas
- Datos de mercado en vivo (mock por ahora)
