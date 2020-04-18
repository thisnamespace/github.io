import styled from "styled-components"
import { maxmedia, minmedia } from './MediaQueries';

export const DesktopOnly = styled.span`
  display: none;
  ${minmedia.tablet`
    display: block;
  `}
`
export const TabletUp = styled.span`
  display: none;
  ${minmedia.phone`
    display: block;
  `}
`
export const MobileOnly = styled.span`
  display: none;
  ${maxmedia.tablet`
    display: block;
  `}
`

export const Section = styled.div`
  background: #ffffff;
  border: solid 1px rgba(224, 224, 224, 0.95);
  border-radius: 5px;
  min-height: ${props => props.minHeight ? props.minHeight : "inherit"}
  padding: 3rem
  padding-bottom: 1em;
  ${maxmedia.tablet`
    padding: 2rem
    padding-bottom: 0.5em;
  `}
  ${maxmedia.phone`
    padding: 1rem
    padding-bottom: 0em;
  `}
`;

export const ColumnHolder = styled.section`
  min-height: ${props => props.removePX ? "calc(100% - " + props.removePX + "px)" : "100%"};
  display: flex;
  position: relative;
  ${maxmedia.phone`
    flex-direction: column;
  `}
`
export const Column =  styled.div`
  position: relative;
  flex:  ${props => props.size ? props.size : 1};
  min-width:  ${props => props.minSize ? props.minSize : "auto"};
  max-width:  ${props => props.maxSize ? props.maxSize : "inherit"};
  padding: 2rem;
  padding-bottom: 0px;
  ${maxmedia.tablet`
    padding: 1rem;
    padding-bottom: 0px;
  `}
  ${maxmedia.phone`
    min-width: 320px;
    padding: 0.5rem;
    padding-bottom: 0px;
  `}
`

export const Spacer =  styled.div`
  height:  ${props => props.size ? props.size + "rem" : "2rem"};
  width: 100%;
`;

export const FlexRow =  styled.div`
  display: flex;
  align-items: ${props => props.flexPosition ? props.flexPosition : "center"};
  min-height: 2rem;
  align-content: center;
  margin-bottom: 1.5rem;
  label {
    min-width: 150px;
    margin-bottom: 0px;
  };
  ${maxmedia.tablet`
    margin-bottom: 1rem;
  `}
  ${maxmedia.phone`
    margin-bottom: 0.5rem;
  `}
`

export const FlexCell =  styled.div`
  font-size: 0.875rem;
  position: relative;
  width: 100%;
  cursor: ${props => props.isActive ? "default" : "pointer"};
  a {
    color: ${props => props.theme.black};
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    &:hover {
      :after {
        content: ">";
        flex-grow: 1;
        text-align: end;
        padding-right: 1rem;
      }
    }
  }
  &:hover {
    :after {
      cursor: pointer;
      pointer-events: none;
      content: " ";
      width: calc(100% + 1rem);
      height: calc(100% + 1rem);
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      opacity: 0.3;
      background:  ${props => props.isActive ? "none" : props.theme.greyLighter};
    }
  }
`

export const HR = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.greyLighter};
  margin-bottom: 1.5rem;
  ${maxmedia.tablet`
  margin-bottom: 1rem;
  `}
  ${maxmedia.phone`
  margin-bottom: 0.5rem;
  `};
`
