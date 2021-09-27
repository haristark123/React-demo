import { useContext } from "react";
import Card from "../../pages/ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favourites-context";


function MeetUpItem(props) {
  const favouriteCtx=useContext(FavouritesContext);
  const itemsIsFavourite=favouriteCtx.itemIsFavourite(props.id)
  function toggleFavouriteStatusHandler(){
      if (itemsIsFavourite){
        favouriteCtx.removeFavourite(props.id)
      }
      else{
        favouriteCtx.addFavourite({
          id:props.id,
          title:props.title,
          description:props.description,
          image:props.image,
          address:props.address
        })
      }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemsIsFavourite?'Remove From Favourites':'To favourites'}</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetUpItem;
