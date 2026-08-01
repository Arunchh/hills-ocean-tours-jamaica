export function formatWhatsAppLink(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function formatPrice(amount: number): string {
  return `$${amount}`;
}
