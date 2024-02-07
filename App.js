const toggle = document.querySelector(".fullcontainer .navbar .toggle");
toggle.addEventListener("click", (e)=>{
  const ul = document.querySelector(".fullcontainer .navbar .navlink");
  ul.classList.toggle('aktif');
});
const tinggi_layar = window.innerHeight;
window.addEventListener("DOMContentLoaded",(e)=>{
  const Picture_home_page = document.querySelector(".container .home img");
  const name_home_page = document.querySelector(".container .home .grid1 .medium");
  const title_home_page = document.querySelector(".container .home .grid1 .title");
  const description_home_page = document.querySelector(".container .home .grid1 .description");

  Picture_home_page.classList.add("aktif");
  name_home_page.classList.add("aktif");
  title_home_page.classList.add("aktif");
  
  description_home_page.classList.add("aktif");
});

window.addEventListener("scroll",(e)=>{
  const title_projects_text = document.querySelector(".container .projects .title .text");
  const title_projects_line = document.querySelector(".container .projects .title .line");
  const title_skills_text = document.querySelector(".container .skills .title .text");
  const title_skills_line = document.querySelector(".container .skills .title .line");
  const card_projects_page = document.querySelectorAll(".container .projects .wrap_projects .card_projects");
  const card_page_skills = document.querySelectorAll(".container .skills .wrap_skils .card_skils");
  const title_contact_text = document.querySelector(".container .contact .title .text");
  const title_contact_line = document.querySelector(".container .contact .title .line");

  const animation_title_skills_line = tinggi_layar > title_skills_line.getBoundingClientRect().top ? title_skills_line.classList.add("aktif") : title_skills_line.classList.remove("aktif");
  
  const animaton_title_projects_text = tinggi_layar > title_projects_text.getBoundingClientRect().top ? title_projects_text.classList.add("aktif") : title_projects_text.classList.remove("aktif");

  const animation_title_projects_line = tinggi_layar > title_projects_line.getBoundingClientRect().top ? title_projects_line.classList.add("aktif") : title_projects_line.classList.remove("aktif");

  const animasi_title_skills_page = tinggi_layar > title_skills_text.getBoundingClientRect().top ? title_skills_text.classList.add("aktif") : title_skills_text.classList.remove("aktif");

  const animasi_line_contact = tinggi_layar > title_contact_line.getBoundingClientRect().top ? title_contact_line.classList.add("aktif") : title_contact_line.classList.remove("aktif");

  const animasi_line_text = tinggi_layar > title_contact_text.getBoundingClientRect().top ? title_contact_text.classList.add("aktif") : title_contact_text.classList.remove("aktif");

  card_projects_page.forEach((e)=>{
    const animasi_card_projects_page = tinggi_layar > e.getBoundingClientRect().top ? e.classList.add("aktif") : e.classList.remove("aktif");
  });
  card_page_skills.forEach((e)=>{
    const animasi = tinggi_layar > e.getBoundingClientRect().top ? e.classList.add("aktif") : e.classList.remove("aktif");
  });
});