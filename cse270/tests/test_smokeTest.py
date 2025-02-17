# Generated by Selenium IDE
import pytest
import time
import json
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.firefox.options import Options


class TestSmokeTest():
  # def setup_method(self, method):
  #   self.driver = webdriver.Firefox()
  #   self.vars = {} 
  def setup_method(self, method):
    options = Options()
    options.add_argument("--headless")  # Enables headless mode
    self.driver = webdriver.Firefox(options=options)
    self.vars = {}

  
  
  def teardown_method(self, method):
    self.driver.quit()
  
  def test_logoHeaderandTitle(self):
    self.driver.get("http://127.0.0.1:5500/cse270/teton/1.6/index.html")
    self.driver.set_window_size(1141, 868)
    self.driver.find_element(By.CSS_SELECTOR, ".header-top").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".header-title > h2").text == "Chamber of Commerce"
    assert self.driver.title == "Teton Idaho CoC"
  
  def test_directoryGridandListfeature(self):
    self.driver.get("http://127.0.0.1:5500/cse270/teton/1.6/index.html")
    self.driver.set_window_size(1130, 868)
    self.driver.find_element(By.LINK_TEXT, "Directory").click()
    self.driver.find_element(By.ID, "directory-grid").click()
    elements = self.driver.find_elements(By.CSS_SELECTOR, ".gold-member:nth-child(9) > img")
    assert len(elements) > 0
    self.driver.find_element(By.ID, "directory-list").click()
    elements = self.driver.find_elements(By.CSS_SELECTOR, ".gold-member:nth-child(9) > p:nth-child(2)")
    assert len(elements) > 0
  
  def test_homePageSpotlightsandJoinFeature(self):
    self.driver.get("http://127.0.0.1:5500/cse270/teton/1.6/index.html")
    self.driver.find_element(By.CSS_SELECTOR, ".main-spotlight").click()
    elements = self.driver.find_elements(By.CSS_SELECTOR, ".main-spotlight")
    assert len(elements) > 0
    elements = self.driver.find_elements(By.LINK_TEXT, "Join Us!")
    assert len(elements) > 0
    self.driver.find_element(By.LINK_TEXT, "Join Us!").click()
    self.driver.set_window_size(1133, 868)
  
  def test_joinPageDataEntry(self):
    self.driver.get("http://127.0.0.1:5500/cse270/teton/1.6/index.html")
    self.driver.set_window_size(1145, 868)
    self.driver.find_element(By.LINK_TEXT, "Join").click()
    self.driver.find_element(By.NAME, "fname").click()
    elements = self.driver.find_elements(By.NAME, "fname")
    assert len(elements) > 0
    self.driver.find_element(By.NAME, "fname").click()
    self.driver.find_element(By.NAME, "fname").send_keys("Owen")
    self.driver.find_element(By.NAME, "lname").click()
    self.driver.find_element(By.NAME, "lname").send_keys("Kasule")
    self.driver.find_element(By.NAME, "bizname").click()
    self.driver.find_element(By.NAME, "bizname").send_keys("Techrooot")
    self.driver.find_element(By.NAME, "biztitle").click()
    self.driver.find_element(By.NAME, "biztitle").send_keys("CEO")
    self.driver.find_element(By.NAME, "submit").click()
    elements = self.driver.find_elements(By.NAME, "email")
    assert len(elements) > 0
  
  def test_adminPageUsernamePassword(self):
    self.driver.get("http://127.0.0.1:5500/cse270/teton/1.6/index.html")
    self.driver.set_window_size(1136, 868)
    self.driver.find_element(By.LINK_TEXT, "Admin").click()
    self.driver.find_element(By.ID, "username").click()
    elements = self.driver.find_elements(By.ID, "username")
    assert len(elements) > 0
    self.driver.find_element(By.ID, "username").click()
    self.driver.find_element(By.ID, "username").send_keys("6rdxfds")
    self.driver.find_element(By.ID, "password").click()
    self.driver.find_element(By.ID, "password").send_keys("oiuyt")
    self.driver.find_element(By.CSS_SELECTOR, ".mysubmit:nth-child(4)").click()
    self.driver.find_element(By.CSS_SELECTOR, ".errorMessage").click()
    assert self.driver.find_element(By.CSS_SELECTOR, ".errorMessage").text == "Invalid username and password."
  
