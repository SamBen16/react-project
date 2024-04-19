import React from 'react';

function Error() {
    return (
        <Header />
        <div className="style-pageErreur">
          <img src={ pageErreur } alt="page 404" id="page_404" />
          <img src={ pageQuiNexistePas } alt="page qui n'existe pas" id="page_inexistante" />
        <div>
          <Link to="/"><img src={ retourPageDaccueil } alt="retour page d'accueil" id="retour_page_accueil"/></Link>
        </div>
        </div>
      <Footer />
    </div>
    )
}