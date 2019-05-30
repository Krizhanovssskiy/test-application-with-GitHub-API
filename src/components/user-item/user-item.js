import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import {
  SDivFlex,
  SImg,
  SHeaderItem,
  SText,
  SDivInform,
  SLightText
} from '../../styled-components';


const UserItem = ({
                    name,
                    login,
                    imgUrl,
                    biography,
                    location,
                            }) => {

  return (
    <SDivFlex>
      <SImg src={imgUrl} alt="avatar"/>
      <SDivInform>

        <SHeaderItem>
          <span>{login}</span>
          {name}
        </SHeaderItem>
        <SText>{biography}</SText>
        <SLightText>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {location}
        </SLightText>

      </SDivInform>
    </SDivFlex>
  )
};

export default UserItem;