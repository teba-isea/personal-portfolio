import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;

  &: @media (min-width: 576px) {
    max-width: 540px;
  }

  &: @media (min-width: 768px) {
    max-width: 720px;
  }

  &: @media (min-width: 992px) {
    max-width: 960px;
  }

  &: @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: ${(props) =>
    props.alignX ? props.align : 'center'} !important;
  justify-content: ${(props) =>
    props.alignX ? props.align : 'center'} !important;
  margin: ${(props) => (props.margin ? props.margin : 0)}rem;
  align-items: ${(props) => props.alignY ? props.alignY : 'center'} !important;
`
export const Col = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;

  margin: ${(props) => (props.margin ? props.margin : 0)}rem;

  &: @media(min-width: 768px){
    margin:0.5rem;
  }

  -ms-flex: 0 0 ${(props) => (props.size ? props.size * 8.33 : 12 * 8.33)}%;
  flex: 0 0 ${(props) => (props.size ? props.size * 8.33 : 12 * 8.33)}%;
  max-width: ${(props) => (props.size ? props.size * 8.33 : 12 * 8.33)}%;
`
