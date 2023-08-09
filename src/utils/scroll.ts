export const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  const navbarHeight = 3.25 * 16

  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    })
  }
}
