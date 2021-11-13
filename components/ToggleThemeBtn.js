import styled from 'styled-components';
const Button = styled.button `
    background: ${({ themeMode }) => themeMode.background};
    border: 2px solid ${({ themeMode }) => themeMode.toggleBorder};
    color: ${({ themeMode }) => themeMode.text};
    border-radius: 30px;
    cursor: pointer;
    font-size:0.8rem;
    padding: 0.6rem;
  `
export const ToggleThemeBtn = ({themeMode, toggleTheme}) => {
  return (
    <Button onClick={toggleTheme} themeMode={themeMode}>Toggle Dark Mode</Button>
  )
}