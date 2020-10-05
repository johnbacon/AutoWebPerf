/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class Connector {
  constructor(config, apiHandler) {
    config = config || {};
    this.apiHandler = apiHandler;
    this.testsPath = config.testsPath;
    this.resultsPath = config.resultsPath;
    this.verbose = config.verbose;
    this.debug = config.debug;
  }
  getEnvVars() {}
  getTestList(options) {}
  updateTestList(newTests, options) {}
  getResultList(options) {}
  appendResultList(newResults, options) {}
  updateResultList(newResults, options) {}
}

module.exports = Connector;
