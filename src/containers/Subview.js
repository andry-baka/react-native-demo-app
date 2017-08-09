/**
 * # Subview.js
 *
 *  This is called from main to demonstrate the back button
 *
 */
'use strict'
/*
 * ## Imports
 *
 * Imports from redux
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

/**
 * Router
 */
import {Actions} from 'react-native-router-flux'

/**
 * Navigation Bar
 */
import NavigationBar from 'react-native-navbar'

/**
 * The necessary components from React
 */
import React, {Component} from 'react'
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../components';
//import {data} from '../data';
let moment = require('moment');

/**
 * Use device options so we can reference the Version
 *
 */
import * as deviceActions from '../reducers/device/deviceActions'

/**
* ## Redux boilerplate
*/

/**
 *  Instead of including all app states via ...state
 *  You probably want to explicitly enumerate only those which Main.js will depend on.
 *
 */
function mapStateToProps (state) {
  return {
    deviceVersion: state.device.version
  }
}

/*
 * Bind all the actions in deviceActions
 */
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(deviceActions, dispatch)
  }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  time: {
    marginTop: 5
  },
  img: {
    flexGrow: 1,
  },
}));

/*
var styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginTop: 80,
    padding: 10
  },
  summary: {
    fontFamily: 'BodoniSvtyTwoITCTT-Book',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
*/


/**
 * ### Translations
 */
var I18n = require('react-native-i18n')
import Translations from '../lib/Translations'
I18n.translations = Translations

/**
 * ## Subview class
 */

 const articles = [{
  'id': 1,
 // 'photo': require('../data/img/photo1.png'),
  'type': 'article',
  'time': -300,
  'header': 'Plants Of Our Nature',
  'text': 'Ferns are a very old group of plants. They first appeared on Earth in the middle Devonian Era about 360 million years ago, just before the Carboniferous Era. Most of the modern fern families we see today first appeared in the Late Cretaceous about 45 or 50 million years ago – during the age of the dinosaurs!',
  'comments': [{
    'id': 1,
    'text': 'Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
    'time': 0
  }, {
    'id': 2,
    'text': 'Quisque ut erat. Curabitur gravida nisi at nibh.',
    'time': -311
  }, {
    'id': 3,
    'text': 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
    'time': -622
  }, {
    'id': 4,
    'text': 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    'time': -933
  }, {
    'id': 5,
    'text': 'In hac habitasse platea dictumst.',
    'time': -1244
  }, {
    'id': 6,
    'text': 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    'time': -1555
  }, {
    'id': 7,
    'text': 'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
    'time': -1866
  }, {
    'id': 8,
    'text': 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    'time': -2177
  }]
}, {
  'id': 2,
 // 'photo': require('../data/img/photo2.png'),
  'type': 'article',
  'time': -1373,
  'header': 'Balloon Trip',
  'text': 'Mostly it’s about hot air - for without that balloons are just big empty bags with baskets on the bottom. ' +
  'The Montgolfier brothers had great hopes when they made the first manned flight. ' +
  'They thought balloons would take off as an available means of commercial flight. ' +
  'Instead, they have remained the province of sport, adventure and enjoyment. ' +
  'Modern balloons are a lot more sophisticated than their ancestors, ' +
  'but they still retain the essential characteristics which makes them so attractive. ' +
  'A plane is claustrophobic and very noisy. Balloons are so gentle and majestic and silent when the burner’s not working.',
  'comments': []
}, {
  'id': 3,
 // 'photo': require('../data/img/photo3.png'),
  'type': 'article',
  'time': -2446,
  'header': 'Sea World',
  'text': 'The worlds oceans cover two thirds of our planet. As we take a dive from the rocks or paddle out from the beach, we are entering a place which is teeming with marine life. ' +
  'From fish to crabs to octopuses or even sea creatures that have not yet been discovered, the oceans and its coastlines are an amazing and interesting foray of water wildlife.',
  'comments': []
}, {
  'id': 4,
  //'photo': require('../data/img/photo4.png'),
  'type': 'article',
  'time': -3519,
  'header': 'Flowers',
  'text': 'Flowers did not always exist; they first appeared 140 million years ago. Before that, ferns and cone bearing trees dominated the earth. ' +
  'Several centuries ago in Holland, tulips were more valuable than gold. ' +
  'Broccoli is actually a flower. Some plants such as orchids do not need soil to grow-they get all of their nutrients from the air.',
  'comments': []
}, {
  'id': 5,
//  'photo': require('../data/img/photo5.png'),
  'type': 'article',
  'time': -4592,
  'header': 'Birds Of Our Planet',
  'text': 'Birds have feathers, wings, lay eggs and are warm blooded. There are around 10000 different species of birds worldwide. ' +
  'The Ostrich is the largest bird in the world. It also lays the largest eggs and has the fastest maximum running speed (97 kph). ' +
  'Scientists believe that birds evolved from theropod dinosaurs. Birds have hollow bones which help them fly. ' +
  'Some bird species are intelligent enough to create and use tools.',
  'comments': []
}, {
  'id': 6,
 // 'photo': require('../data/img/photo6.png'),
  'type': 'article',
  'time': -5665,
  'header': 'Mountains',
  'text': 'Mountains make up about one-fifth of the world\'s landscape, and provide homes to at least one-tenth of the world\'s people. ' +
  'The tallest known mountain in the solar system is Olympus Mons, located on Mars. ' +
  'There are mountains under the surface of the sea! ' +
  'Mountains occur more often in oceans than on land; some islands are the peaks of mountains coming out of the water.',
  'comments': []
}, {
  'id': 7,
 // 'photo': require('../data/img/photo45.png'),
  'type': 'fact',
  'time': -5665,
  'header': 'Smile and Frown',
  'text': 'It takes 17 muscles to smile and 43 to frown.',
  'comments': []
}
];


export class Subview extends Component {

  constructor(props) {
    super(props);
   // this.data = data.getArticles();
    this.data = articles;
    //this.renderItem = this._renderItem.bind(this);
  }


  _keyExtractor(post, index) {
    return post.id;
  };


  _renderItem(info) {
    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate('Article', {id: info.id})}>
        <RkCard rkType='imgBlock' style={styles.card}>
          <Image source={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFg7dlG8upAtFNRSNe4SkGIHJ46NtVYWHsbWtsJd6OAv_2n30ZFvfV8JP"}
          style={styles.img}/>

          <View rkCardImgOverlay rkCardContent style={styles.overlay}>
            <RkText rkType='header4 inverseColor'>{info.header}</RkText>
            <RkText style={styles.time}
                    rkType='secondary2 inverseColor'>{moment().add(info.time, 'seconds').fromNow()}</RkText>
          </View>
          <View rkCardFooter>
            <SocialBar rkType='space' showLabel={true}/>
          </View >
        </RkCard>
      </TouchableOpacity>
    )
  }

  render () {
    var titleConfig = {
      title: I18n.t('Subview.subview')
    }

    var leftButtonConfig = {
      title: I18n.t('Subview.back'),
      handler: Actions.pop
    }

    return (
      <View>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig} />
        <View style={styles.container}>
        <Text>dasdsad</Text>

            {articles.map((item, index) => {
              return (
                this._renderItem(item)
            )}
            )}

      {/* <FlatList
        data={articles}
        renderItem={({ item }) => (
          <View>sdsf</View>
        )}
      /> */}

        </View>
      </View>
    )
  }
}

/**
 * Connect the properties
 */
export default connect(mapStateToProps, mapDispatchToProps)(Subview)
