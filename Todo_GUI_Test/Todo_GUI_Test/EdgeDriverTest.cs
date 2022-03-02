using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;

namespace Todo_GUI_Test
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private const string startUrl = "https://fredidi.github.io/TodoApp2.1/";
        private EdgeDriver browser;


        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            browser.Url = startUrl;
        }


        //3 test methods
        [TestMethod]
        public void AddOneTodo_Show()
        {
            var addTodo = browser.FindElementById("todoInput");
            addTodo.SendKeys("New Todo Added" + Keys.Enter);

            var todo = browser.FindElementByTagName("p");
            Assert.AreEqual("New Todo Added", todo.Text);
        }

        [TestMethod]
        public void AddOneTodo_ToggleDone_Counter()
        {
            var addTodo = browser.FindElementById("todoInput");
            addTodo.SendKeys("Another Todo Added");
            addTodo.SendKeys(Keys.Enter);

            var count = browser.FindElementById("counter");
            string oneItemLeft = count.Text;

            Assert.AreEqual("1 item left", oneItemLeft);


            var toggleDone = browser.FindElementById("toggle-done");
            toggleDone.Click();

            var count2 = browser.FindElementById("counter");
            string zeroItemsLeft = count2.Text;

            Assert.AreEqual("0 items left", zeroItemsLeft);
        }

        [TestMethod]
        public void AddThreeTodo_ToggleOneDone_CounterTwo()
        {
            var addTodo1 = browser.FindElementById("todoInput");
            addTodo1.SendKeys("First Todo" + Keys.Enter);
            var addTodo2 = browser.FindElementById("todoInput");
            addTodo2.SendKeys("Second Todo" + Keys.Enter);
            var addTodo3 = browser.FindElementById("todoInput");
            addTodo3.SendKeys("Third Todo" + Keys.Enter);

            var count = browser.FindElementById("counter");
            var threeItemLeft = count.Text;

            Assert.AreEqual("3 items left", threeItemLeft);

            var toggleDone = browser.FindElementById("toggle-done");
            toggleDone.Click();

            var count2 = browser.FindElementById("counter");
            var twoItemsLeft = count2.Text;

            Assert.AreEqual("2 items left", twoItemsLeft);
        }

    //    [TestCleanup]
    //    public void EndEdgeDriver()
    //    {
    //        browser.Quit();
    //    }
    }
}
