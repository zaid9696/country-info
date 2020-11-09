
import React from 'react';
import {connect} from 'react-redux';
import SimpleBar from 'simplebar-react';
import {getNames} from 'country-list';
import {cardFetch} from '../../redux/card/card.actions';

import RenderHTML from '../renderHTML/renderHTML';

const SearchDropdown = ({searchValue, cardFetch}) => {


      const countries = getNames();

        const nameCapitalized = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
      const conName = countries.filter((country) => country.includes(nameCapitalized));

const onClickHandler = (e) => {

      const searchText = e.target.matches('.dropItem');

        let contentText = e.target.dataset.item;

        if(!searchText){
          contentText = e.target.parentElement.dataset.item;
        }

        // console.log(contentText);
      cardFetch(contentText)

}

const itemSearch = (conName, searchValue) => {

     const searchResult = conName.map((item, i) => {

      const regex = new RegExp(searchValue, 'gi');
      const country = item.replace(regex, `<span class="itemHiglight">${searchValue}</span>`);

      return <RenderHTML value={item} key={i} HTML={country} click={onClickHandler} />;

    });

    return searchResult;


}

const searchResults = searchValue ? (
      <ul className="searchDropdown">
        <SimpleBar style={{ maxHeight: 300 }}>
            {itemSearch(conName, searchValue)}
          </SimpleBar>
      </ul>
    ) : null;

  return  searchResults;
}

const mapDispatchProps = (dispatch) => ({

  cardFetch: (log) => dispatch(cardFetch(log))

})

export default connect('',mapDispatchProps)(SearchDropdown);
