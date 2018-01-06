import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAd, updateAd, addAd, delAd, getFlower } from './actions';
import { combineData } from './reducers';

import { image } from '../data';


class Ad extends Component {
  componentWillMount() {
    this.props.getAd()
    this.props.getFlower()
  }

  AddAd = () => {
    const payload = {
      title: '多肉植物',
      description: '我会一朵🌺 ，可爱的🌺 。',
      image: image,
    }

    this.props.addAd(payload)
  }

  delAd = item => {
    this.props.delAd(item)
  }

  updateAd = item => {
    const payload = {
      id: item.id,
      title: '多肉',
      description: '我是一朵小红花 ，可爱的🌺 。',
    }
    this.props.updateAd(payload)
  }

  render() {
    const { adsResult, adsEntities } = this.props
    const ads = combineData(adsResult, adsEntities)

    return (
      <div>
        {
          ads.map(item => {
            return (
              <div key={item.id}>
                <div>
                  {item.title}
                  {item.description}
                </div>
                <img style={{ height: 180, width: 300 }} src={item.image} alt={item.title} />
                <button onClick={() => this.delAd(item)}>删除</button>
                <button onClick={() => this.updateAd(item)}>更新</button>
              </div>
            )
          })
        }
        <button onClick={this.AddAd}>添加广告</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    adsResult: state.result.ads,
    adsEntities: state.entities.ads,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getAd,
    updateAd,
    addAd,
    getFlower,
    delAd,
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ad)
