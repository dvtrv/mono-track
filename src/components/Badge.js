/**
 * Badge component for displaying status badges with optional text and icon.
 * @param {Object} props - The properties of the Badge component.
 * @param {string} props.text - The text to display inside the badge.
 * @param {string} [props.icon] - The icon class to display inside the badge.
 * @param {string} [props.variant] - The variant of the badge, can be "positive", "warning", or "negative".
 * @returns {string} - The HTML string representing the badge.
 */

export const Badge = ({ text, icon, variant }) => {
  const badgeVariant = (variant) => {
    switch (variant) {
      case (variant = "positive"):
        return "badge-success";
      case (variant = "warning"):
        return "badge-warning";
      case (variant = "negative"):
        return "badge-error";
      case !variant:
        return "";
    }
  };
  return /* html */ `
    <div class="badge badge-sm badge-soft ${badgeVariant(variant)}">
        ${icon ? `<span class="w-6 h-6 shrink-0 ${icon}"></span>` : ""}
        ${text ? `<span class="leading-none opacity-60">${text}</span>` : ""}
    </div>

  `;
};
