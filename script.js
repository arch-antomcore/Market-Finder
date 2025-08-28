// ====== Dados: catálogo inicial ======
    const services = [
      { id:1, name:"Elétrica Residencial", desc:"Instalação de tomadas, disjuntores e revisão geral.", category:"Reformas", price:180, rating:4.6, reviews:122, fast:true, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop" },
      { id:2, name:"Manicure & Nail Art", desc:"Cutilagem, esmaltação e designs autorais.", category:"Beleza", price:70, rating:4.8, reviews:340, fast:false, promo:false, city:"Curitiba", img:"https://images.unsplash.com/photo-1633361084430-4c7b3a79396a?q=80&w=1600&auto=format&fit=crop" },
      { id:3, name:"Aula Particular de Matemática", desc:"Reforço do básico ao avançado, ENEM e vestibulares.", category:"Educação", price:90, rating:4.9, reviews:87, fast:true, promo:false, city:"São José dos Pinhais", img:"https://images.unsplash.com/photo-1596495578065-640863d092de?q=80&w=1600&auto=format&fit=crop" },
      { id:4, name:"Encanador 24h", desc:"Desentupimento, vazamentos e emergências.", category:"Reformas", price:220, rating:4.4, reviews:231, fast:true, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1617103995364-13a83275b345?q=80&w=1600&auto=format&fit=crop" },
      { id:5, name:"Passeio e Pet Sitter", desc:"Passeios diários, alimentação e carinho garantido.", category:"Pets", price:55, rating:4.7, reviews:415, fast:false, promo:false, city:"Campina Grande do Sul", img:"https://images.unsplash.com/photo-1591946614726-a4db25274a5b?q=80&w=1600&auto=format&fit=crop" },
      { id:6, name:"Fotografia de Produtos", desc:"Fotos profissionais para e-commerce e catálogos.", category:"Criativo", price:350, rating:4.8, reviews:64, fast:false, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1616594418241-a4420310a0a5?q=80&w=1600&auto=format&fit=crop" },
      { id:7, name:"Montagem de Móveis", desc:"Rápido, organizado e sem stress.", category:"Reformas", price:140, rating:4.5, reviews:510, fast:true, promo:false, city:"Curitiba", img:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1600&auto=format&fit=crop" },
      { id:8, name:"Design de Logotipo Express", desc:"Conceito, variações e guia rápido de uso.", category:"Criativo", price:420, rating:4.3, reviews:29, fast:true, promo:false, city:"Colombo", img:"https://images.unsplash.com/photo-1607553853185-7e8125338136?q=80&w=1600&auto=format&fit=crop" },
      { id:9, name:"Aula de Inglês Conversação", desc:"Foco em conversação com feedback em tempo real.", category:"Educação", price:120, rating:4.9, reviews:198, fast:true, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop" },
      { id:10, name:"Limpeza Pós-Obra", desc:"Time preparado e equipamentos completos.", category:"Casa", price:600, rating:4.2, reviews:67, fast:false, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1599382825389-a4b64a443900?q=80&w=1600&auto=format&fit=crop" },
      { id:11, name:"Personal Trainer", desc:"Treinos personalizados para resultados reais.", category:"Saúde", price:130, rating:4.7, reviews:154, fast:false, promo:false, city:"Curitiba", img:"https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?q=80&w=1600&auto=format&fit=crop" },
      { id:12, name:"DJ para Eventos", desc:"Setlist sob medida e estrutura de som.", category:"Eventos", price:900, rating:4.6, reviews:45, fast:false, promo:false, city:"Pinhais", img:"https://images.unsplash.com/photo-1496298195403-2c1810275185?q=80&w=1600&auto=format&fit=crop" },
      { id:13, name:"Consultoria de Marketing", desc:"Diagnóstico e plano de ação em 7 dias.", category:"Negócios", price:1100, rating:4.8, reviews:26, fast:false, promo:false, city:"Curitiba", img:"https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop" },
      { id:14, name:"Streaming & Setup Gamer", desc:"Configuração OBS, overlays e otimização.", category:"Tecnologia", price:250, rating:4.9, reviews:73, fast:true, promo:true, city:"Curitiba", img:"https://images.unsplash.com/photo-1598550463415-d9976dd3e923?q=80&w=1600&auto=format&fit=crop" },
      { id:15, name:"Formatação de Notebook", desc:"Backup, otimização e antivírus.", category:"Tecnologia", price:120, rating:4.4, reviews:205, fast:true, promo:false, city:"Colombo", img:"https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1600&auto=format&fit=crop" },
    ];

    // ====== Estado ======
    const state = {
      q: "",
      category: "all",
      price: 500,
      rating: 4,
      fast: false,
      promo: false,
      sort: "relevance",
      favorites: new Set(JSON.parse(localStorage.getItem('mf:favs')||'[]')),
      theme: localStorage.getItem('mf:theme') || 'theme-wm',
    }

    // ====== Util ======
    const $$ = (sel, root=document) => root.querySelector(sel);
    const $$$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

    const currency = n => n.toLocaleString('pt-BR', { style:'currency', currency:'BRL' });
    const stars = n => {
      const full = Math.floor(n);
      const half = n - full >= .5;
      return '<span aria-label="avaliação">' + '★'.repeat(full) + (half?'½':'') + '</span>'
    }

    // ====== Inicialização visual ======
    function initCategories(){
      const cats = ['all', ...new Set(services.map(s=>s.category))];
      const sel = $$('#category');
      sel.innerHTML = cats.map(c => `<option value="${c}">${c==='all'?'Todas as categorias':c}</option>`).join('');
    }

    function applyTheme(){
      document.body.className = state.theme;
      localStorage.setItem('mf:theme', state.theme);
    }

    // ====== Render ======
    function renderCards(list){
      const container = $$('#cards');
      container.innerHTML = '';

      if(!list.length){
        $$('#empty').style.display = 'block';
        $$('#count').textContent = '0 resultado';
        return;
      }
      $$('#empty').style.display = 'none';

      // Skeleton loader (leve)
      for(let i=0;i<Math.min(6, list.length);i++){
        const sk = document.createElement('div');
        sk.className = 'card skeleton';
        sk.style.height = '260px';
        container.appendChild(sk);
      }

      setTimeout(()=>{
        container.innerHTML = '';
        list.forEach(s => container.appendChild(cardEl(s)));
      }, 280);

      const txt = list.length + (list.length===1? ' resultado' : ' resultados');
      $$('#count').textContent = txt;

      // filtros ativos em chips
      const chips = [];
      if(state.q) chips.push(`<span class="chip"><i class='fa-solid fa-magnifying-glass'></i> "${state.q}"</span>`);
      if(state.category!=='all') chips.push(`<span class="chip"><i class='fa-solid fa-shapes'></i> ${state.category}</span>`);
      chips.push(`<span class="chip"><i class='fa-solid fa-money-bill-wave'></i> até ${currency(state.price)}</span>`);
      if(state.rating>0) chips.push(`<span class="chip"><i class='fa-solid fa-star'></i> ${state.rating}+</span>`);
      if(state.fast) chips.push(`<span class="chip"><i class='fa-solid fa-bolt'></i> hoje</span>`);
      if(state.promo) chips.push(`<span class="chip"><i class='fa-solid fa-tags'></i> promo</span>`);
      $$('#activeFilters').innerHTML = chips.join(' ');

      renderFavs();
    }

    function cardEl(s){
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div class="thumb" style="background-image:url('${s.img}')">
          ${s.promo?`<span class='tag'>Promo</span>`:''}
          <button class="fav" aria-label="favorito" data-id="${s.id}"><i class="${state.favorites.has(s.id)?'fa-solid':'fa-regular'} fa-heart"></i></button>
        </div>
        <div class="body">
          <div class="title">${s.name}</div>
          <div class="desc">${s.desc}</div>
          <div class="meta">
            <span><i class="fa-solid fa-location-dot"></i> ${s.city}</span>
            <span title="Avaliação">${stars(s.rating)} <b>${s.rating.toFixed(1)}</b> (${s.reviews})</span>
          </div>
          <div class="card-footer">
            <div class="price">
              <b>${currency(s.price)}</b>
              ${s.fast?'<span class="chip"><i class="fa-solid fa-bolt"></i> hoje</span>':''}
            </div>
            <div class="actions">
              <button class="btn ghost" data-quick="${s.id}"><i class="fa-regular fa-eye"></i> Ver</button>
              <button class="btn primary" data-book="${s.id}"><i class="fa-solid fa-calendar-check"></i> Agendar</button>
            </div>
          </div>
        </div>`;

      // Eventos
      el.querySelector('[data-quick]')?.addEventListener('click', ()=> openQuickView(s));
      el.querySelector('[data-book]')?.addEventListener('click', ()=> addToFav(s.id, true));
      el.querySelector('.fav')?.addEventListener('click', (e)=>{
        addToFav(s.id);
        e.currentTarget.querySelector('i').className = `${state.favorites.has(s.id)?'fa-solid':'fa-regular'} fa-heart`;
      });
      return el;
    }

    function renderFavs(){
      const box = $$('#favList');
      const favs = services.filter(s=> state.favorites.has(s.id));
      if(!favs.length){ box.textContent = 'Nenhum favorito ainda.'; return }
      box.innerHTML = favs.map(f=>`<div style="display:flex; justify-content:space-between; gap:8px; align-items:center; margin:6px 0">
        <span>${f.name}</span>
        <button class="btn" data-goto="${f.id}">abrir</button>
      </div>`).join('');
      $$$('[data-goto]').forEach(b=> b.addEventListener('click',()=>{
        const s = services.find(i=> i.id==b.dataset.goto);
        if(s){ openQuickView(s); window.scrollTo({ top: document.body.scrollTop + 140, behavior:'smooth'}); }
      }))
    }

    // ====== Lógica de filtragem, busca e ordenação ======
    function filterSort(){
      const q = state.q.trim().toLowerCase();
      let list = services.filter(s =>
        (state.category==='all' || s.category===state.category) &&
        s.price <= state.price &&
        s.rating >= state.rating &&
        (!state.fast || s.fast) &&
        (!state.promo || s.promo) &&
        (!q || s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q))
      );

      // Ordenação
      const sort = state.sort;
      if(sort==='price-asc') list.sort((a,b)=> a.price-b.price);
      else if(sort==='price-desc') list.sort((a,b)=> b.price-a.price);
      else if(sort==='rating') list.sort((a,b)=> b.rating-a.rating);
      else if(sort==='pop') list.sort((a,b)=> b.reviews-a.reviews);
      else if(sort==='relevance'){
        // mini rank: texto + reviews + rating (inspirado em relevância simplificada)
        list.sort((a,b)=> score(b,q) - score(a,q));
      }
      renderCards(list);
    }

    function score(item, q){
      const textMatch = q ? (item.name+" "+item.desc).toLowerCase().includes(q) ? 1 : 0 : .2;
      return textMatch*2 + item.reviews*0.002 + item.rating*0.6;
    }

    // ====== Quick View ======
    function openQuickView(s){
      $$('#modalTitle').textContent = s.name;
      $$('#modalBody').innerHTML = `
        <div style="display:grid; grid-template-columns:1.2fr .8fr; gap:16px">
          <div>
            <div style="height:220px; background:url('${s.img}') center/cover; border-radius:12px; border:1px solid var(--stroke)"></div>
            <p style="color:var(--muted); margin-top:10px">${s.desc}</p>
          </div>
          <div>
            <div class="chip" style="margin-bottom:8px"><i class="fa-solid fa-shapes"></i> ${s.category}</div>
            <div class="chip" style="margin-bottom:8px"><i class="fa-solid fa-location-dot"></i> ${s.city}</div>
            <div class="chip" style="margin-bottom:8px"><i class="fa-solid fa-star"></i> ${s.rating.toFixed(1)} (${s.reviews} avaliações)</div>
            <div style="font-size:28px; font-weight:800; margin:10px 0">${currency(s.price)}</div>
            <button class="btn primary" style="width:100%" onclick="alert('Agendamento enviado!')"><i class="fa-solid fa-calendar-check"></i> Solicitar orçamento</button>
          </div>
        </div>
        <div class="divider"></div>
        <details>
          <summary><b>Como criamos esta experiência</b></summary>
          <p class="muted" style="font-size:13px">Renderização dinâmica a partir de um <i>array</i> de objetos, filtros combináveis (categoria, preço, nota, opções), busca por nome e ordenação. O design prioriza clareza, contraste e hierarquia visual, com microinterações (skeleton, chips, favoritos e modal) para UX mais fluida.</p>
        </details>
      `;
      $$('#modal').classList.add('active');
    }

    $$('#closeModal').addEventListener('click', ()=> $$('#modal').classList.remove('active'));
    $$('#modal').addEventListener('click', (e)=>{ if(e.target.id==='modal') e.currentTarget.classList.remove('active') });

    // ====== Favoritos ======
    function addToFav(id, toast=false){
      if(state.favorites.has(id)) state.favorites.delete(id); else state.favorites.add(id);
      localStorage.setItem('mf:favs', JSON.stringify(Array.from(state.favorites)));
      renderFavs();
      if(toast){ showToast('Adicionado aos favoritos ✅'); }
    }

    function showToast(msg){
      const t = $$('#toast');
      t.textContent = msg;
      t.classList.add('show');
      setTimeout(()=> t.classList.remove('show'), 1400);
    }

    // ====== Eventos da UI ======
    $$('#searchForm').addEventListener('submit', (e)=>{ e.preventDefault(); state.q = $$('#q').value; filterSort(); });
    $$('#sort').addEventListener('change', (e)=>{ state.sort = e.target.value; filterSort(); });
    $$('#category').addEventListener('change', (e)=>{ state.category = e.target.value; filterSort(); });
    $$('#price').addEventListener('input', (e)=>{ state.price = +e.target.value; $$('#priceValue').textContent = `até ${currency(state.price)}`; });
    $$('#price').addEventListener('change', filterSort);
    $$('#rating').addEventListener('input', (e)=>{ state.rating = +e.target.value; $$('#ratingValue').textContent = `${state.rating.toFixed(1)}+`; });
    $$('#rating').addEventListener('change', filterSort);
    $$('#fast').addEventListener('change', (e)=>{ state.fast = e.target.checked; filterSort(); });
    $$('#promo').addEventListener('change', (e)=>{ state.promo = e.target.checked; filterSort(); });
    $$('#clear').addEventListener('click', ()=>{ Object.assign(state, { q:'', category:'all', price:500, rating:4, fast:false, promo:false, sort:'relevance' });
      $$('#q').value=''; $$('#category').value='all'; $$('#price').value=500; $$('#priceValue').textContent='até R$ 500'; $$('#rating').value=4; $$('#ratingValue').textContent='4.0+'; $$('#fast').checked=false; $$('#promo').checked=false; $$('#sort').value='relevance'; filterSort(); });

    $$('#theme').addEventListener('change', (e)=>{ state.theme = e.target.value; applyTheme(); });

    // ====== Boot ======
    initCategories();
    applyTheme();
    filterSort();
