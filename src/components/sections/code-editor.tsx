import { useState } from "react";

import { useResultDispatch } from "@/store/resultContext";
import { ResultState } from "@/types/types";
import Editor from "@monaco-editor/react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Box, IconButton, MenuItem, Select, Tooltip, Typography } from "@mui/material";

import Section from "./section";

interface ILanguage {
  name: string;
  value: string;
}

const languages: ILanguage[] = [
  {
    name: 'JavaScript',
    value: 'javascript',
  },
  {
    name: 'Python',
    value: 'python',
  }
];

const options = languages.map(({ name, value }, i) => <MenuItem key={value} value={i}>{name}</MenuItem>);

const CodeEditor = () => {
  const [languageIndex, setLanguageIndex] = useState<number>(0);
  const [code, setCode] = useState<string>('');
  const dispatch = useResultDispatch();

  if (!dispatch) return null;

  const lang = languages[languageIndex];

  const handleSubmit = () => {
    fetch('/api/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        language: lang.value,
        code,
      })
    })
      .then(response => response.json() as unknown as ResultState)
      .then((data) => {
        console.log(data);
        dispatch({
          type: 'set',
          payload: data,
        });
      })
      .catch(console.log);
  };

  return (
    <Section flexGrow={1} border={'1px solid white'}>
      <Box display="flex">
        <Typography variant="h6" component="h3" sx={{ marginRight: 'auto' }}>Редактор</Typography>
        <Select
          defaultValue={languageIndex}
          value={languageIndex}
          size="small"
          variant="standard"
          onChange={e => setLanguageIndex(+e.target.value)}
        >
          {options}
        </Select>
        <IconButton size="small" onClick={handleSubmit}>
          <Tooltip title='Запустить'>
            <PlayArrowIcon />
          </Tooltip>
        </IconButton>
      </Box>
      <Box sx={{ height: '100%', minHeight: '300px' }}>
        <Editor
          height={'100%'}
          language={lang.value}
          theme="vs-dark"
          options={{
            cursorWidth: 10
          }}
          value={code}
          onChange={e => setCode(e || '')}
        />
      </Box>
    </Section>
  );
};

export default CodeEditor;