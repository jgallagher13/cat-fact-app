function fact(req, res) {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(cat => {
        res.render('cats/fact', {
            fact: cat.fact
        })
      })
}

module.exports = {
    fact,
}