from langchain_community.llms import Ollama
from langchain.prompts import PromptTemplate
from fastapi import FastAPI
from langserve import add_routes


llm = Ollama(model="huggingface.co/unsloth/Qwen2.5-Coder-0.5B-Instruct-GGUF")

prompt = PromptTemplate.from_template("Answer this question: {question}")
chain = prompt | llm

app = FastAPI()
add_routes(app, chain, path="/llm")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
