!(function (e) {
  var o = [
      "Seja Bem-vindo ao meu site.",
      "Me chamo Rodrigo, sou Desenvolvedor Front-End e Web Design Jr.",
      "Sou estudante de Análise e desenvolvimento de sistemas da Unopar.",
      "Buscando estágio em desenvolvedor front end react",
      "Meu objetivo é crescer e desenvolver profissionalmente junto à empresa.",
    ],
    n = 0,
    t = 0,
    s = "";
  !(function i() {
    n !== o.length &&
      (e("#textTyping").html(s + o[n].substring(0, t) + "_"),
      (t += 1),
      o[n].length + 1 === t
        ? ((s += o[n] + "<br />"),
          (n += 1),
          (t = 0),
          setTimeout(() => {
            i();
          }, 50))
        : setTimeout(() => {
            i();
          }, 50));
  })();
})(jQuery);
