import React from "react";
import { cn } from "../../utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode?: "light" | "dark";
  titleIcon?: any;
  icon?: any;
  title?: string;
  navigationText?: string;
  linkHref?: string;
  linkText?: string;
  description?: string;
  onIconClick?: () => void;
}

function CardBase({ mode = "light", className, ...props }: CardProps) {
  return (
    <div
      className={cn(mode, "elevation-1 rounded-xl relative", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: CardProps) {
  return (
    <header
      className={cn("p-md flex flex-col gap-2xs h-fit", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: CardProps) {
  return (
    <h4
      className={cn("text-grey-90 text-heading-md truncate", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: CardProps) {
  return (
    <p className={cn("text-grey-70 text-body-sm", className)} {...props} />
  );
}

function CardNavigation({ className, ...props }: any) {
  return (
    <p className={cn("text-purple-60 text-body-sm", className)} {...props} />
  );
}

function CardLink({ href, children, className }: any) {
  return (
    <a
      href={href}
      className={cn(
        "text-purple-60 text-button-rg whitespace-nowrap",
        className
      )}
    >
      {children}
    </a>
  );
}

function CardIcon({ type = "button", onClick, children, className }: any) {
  return type === "title" ? (
    <span className={cn(" text-black", className)}>{children}</span>
  ) : (
    <button onClick={onClick} className={cn("text-purple-60", className)}>
      {children}
    </button>
  );
}

function CardContent({ children, className }: any) {
  return <div className={cn("px-md pb-md", className)}>{children}</div>;
}

function CardFlex({ children, className }: any) {
  return (
    <div className={cn("flex justify-between items-center gap-2xs", className)}>
      {children}
    </div>
  );
}

function Card({
  mode = "light",
  titleIcon,
  icon,
  title,
  navigationText,
  linkHref,
  linkText,
  description,
  onIconClick,
  children,
  ...props
}: CardProps) {
  return (
    <CardBase {...props} mode={mode}>
      <CardHeader>
        {navigationText && <CardNavigation>{navigationText}</CardNavigation>}
        <CardFlex>
          <CardFlex className="overflow-x-hidden">
            {titleIcon && <CardIcon type="title">{titleIcon}</CardIcon>}
            <CardTitle>{title}</CardTitle>
          </CardFlex>
          <CardFlex>
            {linkHref && linkText && (
              <CardLink href={linkHref}>{linkText}</CardLink>
            )}
            {icon && <CardIcon onClick={onIconClick}>{icon}</CardIcon>}
          </CardFlex>
        </CardFlex>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </CardBase>
  );
}

export { Card, CardBase, CardTitle };
