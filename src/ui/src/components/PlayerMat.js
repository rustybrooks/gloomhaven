import React from 'react'
import GridLayout from 'react-grid-layout';
import injectSheet from "react-jss";

import PlayerItems from './PlayerItems'
import PlayerActive from "./PlayerActive"
import PlayerStatus from "./PlayerStatus"
import PlayerModifiers from "./PlayerModifiers"

const styles = {
  outter: {
    background: 'red',
    margin: 5
  },

  inner: {
    background: "blue",
    color: "green",
    margin: 5,
  },
};

const PlayerMat = ({classes}) => {
  return (
    <div className={classes.outter}>
      <GridLayout className="layout" cols={4} rowHeight={20} width={300}>
        <div className={classes.inner} key="status" data-grid={{x: 0, y: 0, w: 1, h: 1, static: false}}>
          <PlayerStatus/>
        </div>

        <div className={classes.inner} key="active" data-grid={{x: 1, y: 0, w: 3, h: 1, static: false}}>
          <PlayerActive/>
        </div>

        <div className={classes.inner} key="modifiers" data-grid={{x: 0, y: 1, w: 1, h: 1, static: false}}>
          <PlayerModifiers/>
        </div>

        <div className={classes.inner} key="items" data-grid={{x: 1, y: 1, w: 3, h: 1, static: false}}>
          <PlayerItems/>
        </div>




      </GridLayout>
    </div>
  )
}


export default injectSheet(styles)(PlayerMat)