export class ScrollSpy {
  #sections: HTMLElement[]
  #navLinks: HTMLAnchorElement[]
  #activated?: HTMLAnchorElement

  constructor(
    sections: NodeListOf<HTMLElement>,
    navLinks: NodeListOf<HTMLAnchorElement>
  ) {
    this.#sections = Array.from(sections)
    this.#navLinks = Array.from(navLinks)
  }

  start() {
    const options = {rootMargin: '0px', threshold: 0.6}
    const observer = new IntersectionObserver(this.#handle, options)

    this.#sections.forEach((section) => observer.observe(section))
  }

  #handle = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.#determine(entry.target.id)
      }
    })
  }

  #determine(id: string) {
    this.#deactivate()

    const active = this.#navLinks.find((link) => {
      return link.href.replace(`${origin}/`, '') === `#${id}`
    })

    if (active) this.#activated = active
    else this.#activated = undefined

    this.#activate()
  }

  #activate() {
    if (this.#activated) {
      this.#activated.classList.add('active')
    }
  }

  #deactivate() {
    if (this.#activated) {
      this.#activated.classList.remove('active')
    }
  }
}
