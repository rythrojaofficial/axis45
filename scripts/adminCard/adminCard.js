import { HtmlElement, mdElement } from "../htmlElement.js";

export class Container {
    constructor(parent, propertiesObject = {}){
        this.element = ''
        this.type = 'div';
        this.parent = parent;
        this.properties = propertiesObject;
        this.addElement();
    }
    addElement(){
        let newHtmlElement = new HtmlElement(
            this.type,
            this.parent,
            this.properties,
            'where am i'
        )
        this.element = newHtmlElement.element;
        // this.parent.appendChild(this.element)

    }
    
}


let newsContainer = document.getElementById("populate-admin");
export class AdminCard {
  constructor(title, detailsArray = [], md = "", href = "") {
    this.title = title;
    this.details = detailsArray;
    this.md = md;
    this.link = href;
    this.addCard();
  }

  addCard() {
    let wrapper = new HtmlElement("div", newsContainer, { class: "news-card" });
    let newA;
    switch (this.link) {
      case "":
        newA = new HtmlElement("div", wrapper.element, {});
        break;
      default:
        newA = new HtmlElement("a", wrapper.element, { href: this.link });
        break;
    }

    let newH2 = new HtmlElement("h2", newA.element, {}, this.title);
    if (this.md !== "" && this.md !== "offerings") {
      let showmore = new HtmlElement("div", wrapper.element, {
        class: "show-more",
      });
      let displayedDetails = new HtmlElement("div", showmore.element, {}, "");
      let newMdFrame = new mdElement(
        showmore.element,
        {
          width: "100vw",
          height: "50vh",
          scroll: "auto",
          class: "md-converted-frame",
        },
        this.md
      );
    } else if (this.md === "offerings") {
      let newMdFrame = new HtmlElement("div", wrapper.element, {
        id: "todays-offerings",
      });
    }

    for (let i = 0; i < this.details.length; i++) {
      switch (i) {
        case this.details.length - 1:
          let lastLine = new HtmlElement(
            "div",
            newA.element,
            { class: "last-line" },
            this.details[i]
          );
          break;
        default:
          let nextLine = new HtmlElement(
            "div",
            newA.element,
            { class: "middle-line" },
            this.details[i]
          );
      }
    }
  }
}
