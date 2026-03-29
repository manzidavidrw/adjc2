export function useReveal() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') }),
    { threshold: 0.07 }
  )
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale')
    .forEach(el => io.observe(el))
}