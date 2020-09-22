import { cTB, c, cE } from '../../../../_utils/cssr'

export default c([
  ({ props }) => {
    const {
      cubicBezierEaseInOut,
      cubicBezierEaseIn,
      cubicBezierEaseOut
    } = props.$base
    const {
      rectColor
    } = props.$local
    return cTB('base-tracking-rect', {
      raw: `
        position: absolute;
        left: 0;
        right: 0;
        height: 0;
      `
    }, [
      cE('body', {
        raw: `
          position: absolute;
          right: 0;
          left: 0;
          background-color: ${rectColor};
          transition:
            background-color .3s ${cubicBezierEaseInOut},
            top .3s ${cubicBezierEaseInOut}!important;
        `
      }, [
        c('&.base-tracking-rect-transition-enter, &.base-tracking-rect-transition-leave-to', {
          opacity: 0
        }),
        c('&.base-tracking-rect-transition-enter-active', {
          raw: `
            transition:
              background-color .3s ${cubicBezierEaseInOut},
              opacity .15s ${cubicBezierEaseOut},
              top .3s ${cubicBezierEaseInOut} !important;
          `
        }),
        c('&.base-tracking-rect-transition-leave-active', {
          raw: `
            transition:
              background-color .3s ${cubicBezierEaseInOut},
              opacity .15s ${cubicBezierEaseIn},
              top .3s ${cubicBezierEaseInOut}!important;
          `
        })
      ])
    ])
  }
])