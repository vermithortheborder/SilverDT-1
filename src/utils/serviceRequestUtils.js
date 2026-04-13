export function generateDates() {
  const dates = [];
  for (let i = 0; i < 14; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push(date);
  }
  return dates;
}

export function calculateTotal(currentPrice, durationDays) {
  if (!currentPrice) return 0;
  const basePrice = parseFloat(currentPrice.base_price);
  const pricePerDay = parseFloat(currentPrice.price_per_day || 0);
  const days = parseInt(durationDays || 1);

  if (pricePerDay > 0 && days > 1) {
    return basePrice + pricePerDay * (days - 1);
  }
  return basePrice;
}

export const SERVICE_NAMES = {
  peluqueria: "Peluquería Canina",
  funerario: "Servicio Funerario",
  seguro: "Seguro para Mascotas",
  hospedaje: "Hospedaje",
  daycare: "Daycare",
  clinica: "Clínica Veterinaria",
  paseadores: "Paseadores",
};
