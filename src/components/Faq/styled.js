import styled from "styled-components"
import { MessageAltAdd } from "@styled-icons/boxicons-solid/MessageAltAdd"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  padding: 0 5%;
  max-width: 1140px;
`

export const Acordeon = styled.div`
  width: 100%;
`

export const AcordeonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  font-size: max(13px, 1.5vw);
  font-weight: 700;
  text-decoration: none;
  color: #282828;
  background-color: #fda602;
  width: 100%;
  overflow: auto;
`
export const IconAdd = styled(MessageAltAdd)`
  min-width: 32px;
  height: 32px;
  color: #282828;
`

export const Description = styled.p`
  font-size: max(11px, 1.3vw);
  color: #282828;
  padding: 2rem;
  line-height: 1.5;
`
