import * as S from "./listItem.styled";

export interface ListItemProps {
  name: string;
  phone: string;
  date: string;
  service: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  name,
  phone,
  date,
  service,
}) => {
  return (
    <S.Wrapper>
      <div>
        <p>{name}</p>
        <p>{phone}</p>
      </div>
      <p>{service}</p>
      <p>{date}</p>
    </S.Wrapper>
  );
};
