import React, { ReactNode } from "react";
type Headerprops = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};
const Header: React.FC<Headerprops> = ({ image, children }: Headerprops) => {
  return (
    <header>
      <img className="logo logo-spin " src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
