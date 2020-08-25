import React from "react";
import classNames from "classnames";

const Icon = ({ className, name, isOpen, variant, ...otherProps }) => {
   const iconStyles = classNames({
      icon: true,
      [className]: className,
      active: isOpen,
      sidebar: variant === "sidebar",
      button: variant === "button",
   });
   return (
      <div className={iconStyles} {...otherProps}>
         <ion-icon name={name} />
      </div>
   );
};

export default Icon;
