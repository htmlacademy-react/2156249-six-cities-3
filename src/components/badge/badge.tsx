type BadgeProps = {
  text: string;
};

function Badge({ text }: BadgeProps): JSX.Element {
  return <span>{text}</span>;
}

export default Badge;
