changeColorScheme()
function changeColorScheme(pref) {
  if (pref) localStorage.setItem('rw-colorscheme', pref)
  else pref = localStorage.getItem('rw-colorscheme')
  if (!pref){
    localStorage.setItem('rw-colorscheme', 'system')
    pref = 'system'
  }
  switch (pref) {
    case 'system': {
      let systemColorscheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      if (systemColorscheme === 'dark') $('body').addClass('darkscheme')
      else $('body').removeClass('darkscheme')
      $('#colorSchemeSystem').css('font-weight', 'bold')
      $('#colorSchemeDark').css('font-weight', 'normal')
      $('#colorSchemeLight').css('font-weight', 'normal')
      break
    }
    case 'dark': {
      $('body').addClass('darkscheme')
      $('#colorSchemeSystem').css('font-weight', 'normal')
      $('#colorSchemeDark').css('font-weight', 'bold')
      $('#colorSchemeLight').css('font-weight', 'normal')
      break
    }
    case 'light': {
      $('body').removeClass('darkscheme')
      $('#colorSchemeSystem').css('font-weight', 'normal')
      $('#colorSchemeDark').css('font-weight', 'normal')
      $('#colorSchemeLight').css('font-weight', 'bold')
      break
    }
  }
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
  changeColorScheme()
})