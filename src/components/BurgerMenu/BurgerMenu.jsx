const BurgerMenu = () => {
  return (
    <div>
      <div class='container'>
        <input type='checkbox' name='' id='' class='check' />
        <ul class='menu-items'>
          <li>
            <a href='/'>POCETNA</a>
          </li>
          <li>
            <a href='/topfood'>O RESTORANU</a>
          </li>
          <li>
            <a href='/menu'>MENI</a>
          </li>
          <li>
            <a href='/impressions'>UTISCI</a>
          </li>
          <li>
            <a href='/gallery'>GALERIJA</a>
          </li>
        </ul>
        <div class='ham-menu'>
          <span class='line line1'></span>
          <span class='line line2'></span>
          <span class='line line3'></span>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
