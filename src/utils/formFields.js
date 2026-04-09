export function handleDigitsOnlyInput(event) {
  event.currentTarget.value = event.currentTarget.value.replace(/\D+/g, "");
}
