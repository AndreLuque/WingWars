import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router-dom"
import Home from "views/Home"
import Mint from "views/Mint"
import Promo from "views/Promo"
import Stake from "views/Stake"

export default [
  {
    component: (
      <Route exact path={URL.HOME} key={0}>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.PROMO} key={1}>
        <Promo />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.MINT} key={2}>
        <Mint />
      </Route>
    )
  },
  {
    component: (
      <Route exact path={URL.STAKE} key={3}>
        <Stake />
      </Route>
    )
  },
  {
    component: (
      <Route key={4}>
        <Home />
      </Route>
    )
  }
]
