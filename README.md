Simply follow the following steps to run this project successfully:

1. Install all the node dependencies using `npm install`
2. Run the local server using `npm run dev`
3. The localhost server will start up
4. Navigate to App.jsx in source folder where all the imports for all the generated webpages would be found
5. Whichever webpage you want to render just uncomment the import and its corrosponding call in the return function
6. All the imports have been bunched by the model type so that all 10 of them can be uncommented at once
7. Make sure not to clash 2 imprts as the webpages have the same name
8. To run the langchain service, just `cd src/services/chatmodel` --> `source venv/bin/activate` -->install requirements by `pip install -r requirements.txt` ---> then just run the main.py file and the langchain service will start
