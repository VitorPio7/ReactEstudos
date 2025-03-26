import Link from 'next/link'
import classes from './page.module.css'
export default function MealDetailsPage(){
    return <>
     <header className={classes.header}>
        <h1>Delicious meals, created
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>Chose your favorite recipe!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">
             Share Your Favorite recipe.
          </Link>
        </p>
     </header>
     <main className={classes.main}></main>
    </>
}