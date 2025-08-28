const services = [
  { id: 1, nome: "Corte de Cabelo", desc: "Corte moderno para todas as idades", categoria: "Beleza", preco: 50, img: "https://images.unsplash.com/photo-1599947442386-09f6a4c6d05a?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" },
  { id: 2, nome: "Aula de Yoga", desc: "Sessões relaxantes para iniciantes", categoria: "Saúde", preco: 35, img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" },
  { id: 3, nome: "Reparo de Celular", desc: "Troca de tela e manutenção rápida", categoria: "Tecnologia", preco: 120, img: "https://images.unsplash.com/photo-1581091012184-6c32f6f37e7e?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" },
  { id: 4, nome: "Serviço de Jardinagem", desc: "Cuidamos do seu jardim com carinho", categoria: "Casa", preco: 80, img: "https://images.unsplash.com/photo-1590986609282-8941f8f8d718?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" },
  { id: 5, nome: "Aula de Inglês", desc: "Aprenda inglês de forma prática e divertida", categoria: "Educação", preco: 100, img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" },
  { id: 6, nome: "Manicure e Pedicure", desc: "Cuide das suas unhas com profissionais", categoria: "Beleza", preco: 60, img: "https://images.unsplash.com/photo-1572371326355-ef0c70f9b1f6?crop=entropy&cs=tinysrgb&fit=max&h=200&w=300" }
];

const cardsContainer = document.querySelector(".cards");
const filterSelect = document.querySelector("#category");
const sortSelect = document.querySelector("#sort");
const searchInput = document.querySelector("#search");
const countEl = document.querySelector("#count");
const emptyEl = document.querySelector("#empty");

function renderServices(list) {
  cardsContainer.innerHTML = "";
  countEl.textContent = `${list.length} serviço(s) encontrado(s)`;

  if(list.length === 0){
    emptyEl.style.display = "block";
    return;
  } else {
    emptyEl.style.display = "none";
  }

  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="thumb" style="background-image:url('${s.img}')">
        <div class="tag">${s.categoria}</div>
      </div>
      <div class="body">
        <div class="title">${s.nome}</div>
        <div class="desc">${s.desc}</div>
        <div class="meta">
          <div class="price"><b>R$${s.preco}</b></div>
          <div class="actions">
            <button class="btn primary">Contratar</button>
          </div>
        </div>
      </div>
    `;
    cardsContainer.appendChild(card);
  });
}

function applyFilters() {
  const categoria = filterSelect.value;
  const sortOrder = sortSelect.value;
  const searchTerm = searchInput.value.toLowerCase();

  let filtered = [...services];

  if(categoria !== "all"){
    filtered = filtered.filter(s => s.categoria === categoria);
  }

  if(searchTerm) {
    filtered = filtered.filter(s => s.nome.toLowerCase().includes(searchTerm));
  }

  if(sortOrder === "preco-asc") filtered.sort((a,b) => a.preco - b.preco);
  if(sortOrder === "preco-desc") filtered.sort((a,b) => b.preco - a.preco);

  renderServices(filtered);
}

filterSelect.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);
searchInput.addEventListener("input", applyFilters);

document.querySelector("#searchForm").addEventListener("submit", e => e.preventDefault());

renderServices(services);
