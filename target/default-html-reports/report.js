$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Editbook.feature");
formatter.feature({
  "name": "Edit book should have following parameters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@driver"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the librarian logged in the application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.profillo.step_definitions.LoginStepDefs.the_librarian_logged_in_the_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GSIE280\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\n    at getResponseForW3CError (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat com.profillo.utilities.Driver.get(Driver.java:91)\r\n\tat com.profillo.step_definitions.LoginStepDefs.the_librarian_logged_in_the_application(LoginStepDefs.java:17)\r\n\tat ✽.the librarian logged in the application(file:///C:/Users/Mehmet/IdeaProjects/CucumberFramework/src/test/resources/features/Editbook.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Librarian can edit books",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@driver"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@PROF-231"
    }
  ]
});
formatter.step({
  "name": "user clicks on books module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_books_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit book button",
  "keyword": "And "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_edit_book_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fills each component in edit window",
  "keyword": "When "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_fills_each_component_in_edit_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save changes button",
  "keyword": "And "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_save_changes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "New changes will appear on book management page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.new_changes_will_appear_on_book_managament_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GSIE280\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\n    at getResponseForW3CError (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat com.profillo.utilities.Driver.get(Driver.java:91)\r\n\tat com.profillo.step_definitions.Hooks.tearDown(Hooks.java:22)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the librarian logged in the application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.profillo.step_definitions.LoginStepDefs.the_librarian_logged_in_the_application()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GSIE280\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\n    at getResponseForW3CError (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat com.profillo.utilities.Driver.get(Driver.java:91)\r\n\tat com.profillo.step_definitions.LoginStepDefs.the_librarian_logged_in_the_application(LoginStepDefs.java:17)\r\n\tat ✽.the librarian logged in the application(file:///C:/Users/Mehmet/IdeaProjects/CucumberFramework/src/test/resources/features/Editbook.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Edit book should have following parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@driver"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@PROF-265"
    }
  ]
});
formatter.step({
  "name": "user clicks on books module",
  "keyword": "Given "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_books_module()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on edit book button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_edit_book_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fills each component in edit window",
  "keyword": "When "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_fills_each_component_in_edit_window()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on save changes button",
  "keyword": "And "
});
formatter.match({
  "location": "com.profillo.step_definitions.LibrarianStepDefs.user_clicks_on_save_changes_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "new changes will appear on book management page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.profillo.step_definitions.EditBookStepDefs.new_changes_will_appear_on_book_management_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-GSIE280\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: driver.version: Driver\nremote stacktrace: UnknownError: An unknown server-side error occurred while processing the command. Original error: Can\u0027t stop process; it\u0027s not currently running (cmd: \u0027C:\\\\Users\\\\Mehmet\\\\IdeaProjects\\\\CucumberFramework\\\\src\\\\test\\\\resources\\\\chromedriver_win32.zip --url-base\\\u003dwd/hub --port\\\u003d8000 --adb-port\\\u003d5037 --verbose\u0027)\n    at getResponseForW3CError (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\errors.js:804:9)\n    at asyncHandler (C:\\Program Files\\Appium\\resources\\app\\node_modules\\appium\\node_modules\\appium-base-driver\\lib\\protocol\\protocol.js:380:37)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat com.profillo.utilities.Driver.get(Driver.java:91)\r\n\tat com.profillo.step_definitions.Hooks.tearDown(Hooks.java:22)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the librarian logged in the application",
  "keyword": "Given "
});
formatter.match({
  "location": "com.profillo.step_definitions.LoginStepDefs.the_librarian_logged_in_the_application()"
});
