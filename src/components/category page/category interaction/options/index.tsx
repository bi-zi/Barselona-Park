import { useAppSelector } from '../../../../store/store';

interface MyParams {
  category: string;
  sort: string;
  options: string;
}

interface MyProps {
  onCheckBoxFirstChange: Function;
  resetSorts: Function;
}

export const Options = ({ onCheckBoxFirstChange, resetSorts }: MyProps) => {
  const categoryPage = useAppSelector((state) => state.categoryPage);

  const sortBy = [
    'Вид на море',
    'Вид на город',
    'Балкон',
    'Духовка',
    <>
      Посудомоечная <div> машина </div>
    </>,
    'Кофемашина',
  ];

  return (
    <div className="category-page-container__sorting__dropdown">
      <button className="category-page-container__sorting__dropdown-button">Наличие</button>
      <div className="category-page-container__sorting__dropdown__content">
        {sortBy.map((option, index) => (
          <span key={index}>
            {option}
            <input
              type="checkbox"
              onChange={() => onCheckBoxFirstChange(index)}
              checked={categoryPage.checkBox[index]}
            />
          </span>
        ))}

        <span onClick={() => resetSorts('availability')}>Cброс</span>
      </div>
    </div>
  );
};