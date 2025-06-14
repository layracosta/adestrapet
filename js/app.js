const tutorials = [
  {
    title: "Adestramento de Cães Iniciantes",
    category: "Cães",
    description: "Aprenda os primeiros comandos para ensinar seu cachorro em casa.",
    url: "tutorials/adestrar-caes.html"
  },
  {
    title: "Treinamento de Gatos para Uso da Caixa de Areia",
    category: "Gatos",
    description: "Descubra como incentivar seu gato a usar a caixinha certinho.",
    url: "tutorials/gato-usar-caixa-de-areia.html"
  },
  {
    title: "Adestramento de Filhotes: Primeiros Passos",
    category: "Cães",
    description: "Saiba como começar o adestramento desde cedo com reforço positivo.",
    url: "tutorials/adestrar-filhotes.html"
  },
  {
    title: "Como Ensinar um Papagaio a Falar",
    category: "Aves",
    description: "Guia simples para treinar seu papagaio a repetir palavras.",
    url: "tutorials/papagaio-falar.html"
  },
  {
    title: "Doma de Cavalos: Introdução com Respeito",
    category: "Cavalos",
    description: "Passo a passo gentil para criar vínculo com o cavalo antes da montaria.",
    url: "tutorials/domar-cavalos.html"
  },
  {
    title: "Como fazer o Coelho ficar de pé",
    category: "Coelhos",
    description: "Técnicas para fazer o seu coelho ficar de pé, um truque fácil e adorável.",
    url: "tutorials/coelho-em-pe.html"
  }
];

function renderCards(list) {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  list.forEach(tut => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${tut.title}</h3>
      <p class="category">${tut.category}</p>
      <p>${tut.description}</p>
      <a href="${tut.url}">Ver Tutorial</a>
    `;
    cards.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards(tutorials);
  const search = document.getElementById("search");
  if (search) {
    search.addEventListener("input", () => {
      const text = search.value.toLowerCase();
      const filtered = tutorials.filter(t =>
        t.title.toLowerCase().includes(text) ||
        t.description.toLowerCase().includes(text)
      );
      renderCards(filtered);
    });
  }
});
