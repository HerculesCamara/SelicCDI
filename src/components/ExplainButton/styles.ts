import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const InfoBtt = styled.div<TooltipProps>`
  width: 1.125rem;
  height: 1.125rem;

  margin-left: 0.25rem;
  margin-top: 0.125rem;

  font-size: 0.625rem;
  font-weight: 700;

  background: transparent;
  border: 2px solid var(--gray-dark);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
interface TooltipProps {
  isActive?: boolean
}

export const Tooltip = styled.div<TooltipProps>`
  width: auto;
  min-width: 200px;
  height: auto;
  background: #fff;
  position: absolute;
  top: calc(-100% - 10px);
  left: -50%;

  padding: 0.5rem;
  padding-top: 0.7rem;

  border: solid 1px var(--gray-medium);
  border-radius: 8px;
  box-shadow: 1px 1px 6px var(--gray-light);

  z-index: 1;

  display: ${(props) => (props.isActive ? 'block' : 'none')};
`
export const TooltipContent = styled.div`
  position: relative;

  font-size: 0.8rem;

  img {
    width: 0.7rem;
    background: none;
    border: none;

    position: absolute;
    top: -4px;
    right: 0;
    
    cursor: pointer;
  }
`