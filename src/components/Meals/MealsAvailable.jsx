import { Card } from '../Utils/Card/Card'
import { MealItem } from './MealItem/MealItem'
import classes from './MealsAvailable.module.css'
import { MEALS_MOCK } from '../MockData/MealsMock'

export const MealsAvailable = () => (
  <section className={classes.meals}>
    <Card>
      <ul>
        {MEALS_MOCK.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))}
      </ul>
    </Card>
  </section>
)
